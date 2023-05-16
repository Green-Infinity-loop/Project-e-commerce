import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { sendEmail } from 'src/utils/sendEmail';
import { CheckOTPDto } from './dto/checkOTP.dto';
import { CreateOTPDto } from './dto/createOTP.dto';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { Otp } from './entities/otp.entity';
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Otp.name) private readonly otpmodel: Model<Otp>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signup(signupDto: SignupDto) {
    const { email } = signupDto;
    const user = await this.usersService.findOneByEmail(email);
    if (user) throw new HttpException('User exists', HttpStatus.BAD_REQUEST);
    if (signupDto.password !== signupDto.repassword)
      throw new HttpException(
        'Repeating password is not matching',
        HttpStatus.BAD_REQUEST,
      );
    const password = bcrypt.hashSync(signupDto.password, 10);
    return await this.usersService.create({ ...signupDto, password });
  }
  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;
    const user = await this.usersService.findOneByEmail(email);
    if (!user)
      throw new HttpException('User not exists', HttpStatus.BAD_REQUEST);
    const matchingPassword = await bcrypt.compare(password, user.password);
    if (!matchingPassword)
      throw new HttpException('Password not matching', HttpStatus.BAD_REQUEST);
    const payload = { sub: user };
    console.log(payload);

    const token = this.jwtService.sign(payload);
    console.log('token', token);
    return token;
  }

  async createOTP(createOTPDto: CreateOTPDto) {
    const { email } = createOTPDto;
    const tdo: Otp = await this.otpmodel.create({ email });
    console.log(tdo);

    sendEmail(
      email,
      'Your one time passport',
      `<p>Your one time password is: <b>${tdo.token}</b></p>`,
    )
      .then(() => {
        Logger.log(`OTP sent to: ${email}`);
        return true;
      })
      .catch((error) => {
        Logger.error(`OTP not send to ${email} error: ${error.message}`);
        return false;
      });
  }
  async verifyOTP(checkOTP: CheckOTPDto) {
    const { otp: token, email } = checkOTP;

    const otp = await this.otpmodel.findOne({ token });
    console.log('otp is', otp);

    if (!otp) throw new HttpException('OTP not found', HttpStatus.BAD_REQUEST);
    if (email !== otp.email)
      throw new HttpException('Email not found', HttpStatus.BAD_REQUEST);
    const isExpired = this.isOTPExpired(otp);
    if (isExpired) {
      this.removeOTP(token);
      throw new HttpException('OTP is expired', HttpStatus.BAD_REQUEST);
    }
    let user = await this.usersService.findOneByEmail(email);
    if (!user) user = await this.usersService.create({ email });
    this.removeOTP(token);
    const payload = { sub: user };
    console.log('payload', payload);

    return this.jwtService.sign(payload);
  }
  isOTPExpired(otp: Otp): boolean {
    const expireDate = new Date(otp.createdAt.getTime() * 10 * 1000 * 60);
    return expireDate < new Date();
  }

  async removeOTP(token: number) {
    await this.otpmodel.findOneAndDelete({ token });
    return token;
  }
  async getCurrentUserFromToken(token: string) {
    if (!token || token === '') {
      throw new UnauthorizedException('Token not found');
    }
    const [type, jwt] = token.split(' ');
    console.log('type is:', type);
    console.log('jwt is:', jwt);
    let user;
    try {
      user = await this.jwtService.verifyAsync(jwt);
      user = user.sub;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }
    return user;
  }
}

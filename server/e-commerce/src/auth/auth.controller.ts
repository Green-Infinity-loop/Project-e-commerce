import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { CheckOTPDto } from './dto/checkOTP.dto';
import { CreateOTPDto } from './dto/createOTP.dto';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { Secured } from './secured.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    console.log(signupDto);

    return this.authService.signup(signupDto);
  }

  @Post('/otp/signin')
  signinOTP(@Body() createOTPDto: CreateOTPDto) {
    console.log(createOTPDto);

    return this.authService.createOTP(createOTPDto);
  }
  @Post('/otp/signin/verify')
  signinOTPConfirm(@Body() checkOTPDto: CheckOTPDto) {
    return this.authService.verifyOTP(checkOTPDto);
  }

  @Secured()
  @Get('/me')
  // currentUser(@Headers('Authorization') authorization: string) {
  currentUser(@CurrentUser() user) {
    // console.log('authorization', authorization);
    return user;
  }
}

import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};

export default env;

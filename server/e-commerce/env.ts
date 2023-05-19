import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  CLOUNDINARY_NAME: process.env.CLOUNDINARY_NAME,
  CLOUNDINARY_API_KEY: process.env.CLOUNDINARY_API_KEY,
  CLOUNDINARY_API_SECRET: process.env.CLOUNDINARY_API_SECRET,
};

export default env;

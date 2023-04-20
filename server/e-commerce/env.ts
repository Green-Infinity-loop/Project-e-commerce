import * as dotenv from 'dotenv';
dotenv.config();

const env = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
};

export default env;

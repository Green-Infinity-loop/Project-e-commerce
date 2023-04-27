import { rejects } from 'assert';
import * as nodemailer from 'nodemailer';
import { resolve } from 'path';
import { env } from 'process';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.EMAIL_ADDRESS,
    pass: env.EMAIL_PASSWORD,
  },
});

export const sendEmail = (to: string, subject: string, message: string) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: env.EMAIL_ADDRESS,
      to: to,
      subject: subject,
      text: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error.message);
      } else {
        resolve('Email sent:' + info.response);
      }
    });
  });
};

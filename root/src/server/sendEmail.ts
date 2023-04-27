import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/forms', function (req) {
  const data = req.body.data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'viyaleta.haponava@gmail.com',
      pass: '2089219Vh',
    },
  });

  const mailOptions = {
    from: 'viyaleta.haponava@gmail.com',
    to: 'drako1224@yandex.by',
    subject: 'AUTOMATIC MESSAGE',
    text: `Thank you for testing my app! Here's your data: ${JSON.stringify(
      data
    )} Best Regards, Viyaleta Haponava`,
  };

  transporter.sendMail(mailOptions);
});

app.listen('http://127.0.0.1:5173');

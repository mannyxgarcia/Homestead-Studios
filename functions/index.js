const functions = require('firebase-functions');
const config = functions.config();
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: 'Manny',
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { name, email, phone, message } = request.query;

    mailOptions = {
      ...mailOptions,
      to: 'mannyalgarcia@gmail.com',
      subject: 'Message received!',
      html: `
      <p style="font-size=16px">From: ${name}</p>
      <p style="font-size=16px">Email: ${email}</p>
      <p style="font-size=16px">Phone: ${phone}</p>
      <p style="font-size=16px">Message: ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, error => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent succesfully');
      }
    });

    mailOptions = {
      ...mailOptions,
      to: email,
      subject: 'Autoreply: Message Recieved',
      html: `
      
      <p style="font-size=16px">We will get back to you as soon as possible!</p>
      <p style="font-size=16px">Here is a copy of your message:</p>
      <p style="font-size=16px">From: ${name}</p>
      <p style="font-size=16px">Email: ${email}</p>
      <p style="font-size=16px">Phone: ${phone}</p>
      <p style="font-size=16px">Message: ${message}</p>
      `,
    };
    transporter.sendMail(mailOptions);
  });
});

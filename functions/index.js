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
  from: 'ME',
  to: 'mannyalgarcia@gmail.com',
  subject: 'Testing nodemailer',
  text: 'Text Successful',
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, error => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent succesfully');
      }
    });
  });
});

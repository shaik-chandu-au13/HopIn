var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shaikchandu24@gmail.com',
    pass: 'sharif@2407'
  }
});

var mailOptions = {
  from: 'shaikchandu24@gmail.com',
  to: 'shaikchandu35@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'this is a test email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
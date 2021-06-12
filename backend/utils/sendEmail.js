var nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shaikchandu24@gmail.com',
            pass: 'sharif@2407'
        }
    });

var mailOptions = {
  from: 'shaikchandu24@gmail.com',
  to: options.email,
  subject: options.subject,
  text: options.message
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})}

module.exports = sendEmail;
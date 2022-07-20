const express = require('express')
const nodemailer = require("nodemailer");
require('dotenv').config()
const app = express()
const port = process.env.port || 3000


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

let mailOptions = {
    from: 'ayibanimiikoli@gmail.com',
    to: 'ayibanimi_ikoli@yahoo.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};  

transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
});
    
app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export const sendEmail = async function (email, subject, message) {

  const transportOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    }
  }




  const transporter = nodemailer.createTransport(transportOptions);

  // send mail with defined transport object
  await transporter.sendMail({
    from: 'Utkansh support team', // sender address
    to: email, // user email,
    subject: subject, // Subject line
    html: message, // html body
  });
};


export const sendEmailContact = async function (email, subject, message) {
  const transportOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL_CONTACT,
      pass: process.env.SENDER_EMAIL_PASSWORD_CONTACT,
    }
  }

  const transporter = nodemailer.createTransport(transportOptions);

  await transporter.sendMail({
    from: 'Utkansh support team', // sender address
    to: email, // user email,
    subject: subject, // Subject line
    html: message, // html body
  });
};
// export default sendEmail;
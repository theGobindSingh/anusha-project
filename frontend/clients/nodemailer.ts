import nodemailer from "nodemailer";

const transMailer = nodemailer.createTransport({
  // port: 485,
  host: "smtp.gmail.com",
  auth: {
    user: "pawsandclawsmitra@gmail.com",
    pass: "egxw fwmn bsqg bhbi"
  },
  secure: true
});

export default transMailer;

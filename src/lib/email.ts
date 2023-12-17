import nodemailer from "nodemailer";

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
//  port: parseInt("2525"),
  secure: false,
  auth: {
    user: "gog3dservices@gmail.com",
    pass: "dgcxnrskspdxkcws",
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: "gog3dservices@gmail.com",
    ...data,
  })
};

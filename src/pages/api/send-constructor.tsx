import type { NextApiRequest, NextApiResponse } from "next";
//import { render } from "@react-email/render";
//import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "@/lib/email";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, color } = req.body;
  try {
    await sendEmail({
 //     to: "gluhovog3d@gmail.com",
      to: `${email}`,
      subject: "Welcome to NextAPI",
      html: `
      <div>
        <div>цвет стакана: ${color}</div>
        <h1>Здесь должны быть фото стакана и исходники каптинок для Лого и Фона</h1>
      </div>
      `
    });
  } catch (e) {
    return res.status(500).json({'error': (e as Error).toString()});
  }
  return res.status(200).json({message: "Email sent successfully"});
}

export default handler;
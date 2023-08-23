import type { NextApiRequest, NextApiResponse } from "next";
//import { render } from "@react-email/render";
//import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "@/lib/email";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { companyName, tel, name, textArea, confirm } = req.body;
  try {
    await sendEmail({
      to: "gluhovog3d@gmail.com",
      subject: "Welcome to NextAPI",
      html: `
      <div>
        <h1>${companyName}</h1>
        <h1>${tel}</h1>
        <h1>${name}</h1>
        <h1>${textArea}</h1>
      </div>
      `
    });
  } catch (e) {
    return res.status(500).json({'error': (e as Error).toString()});
  }
  return res.status(200).json({message: "Email sent successfully"});
}

export default handler;
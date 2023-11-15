import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmailImage } from "@/lib/email-image";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, color, logo, logoSource, background,  backgroundSource} = req.body;

  //console.log({logoSource, backgroundSource});
  
  try {
    await sendEmailImage({
 //     to: "gluhovog3d@gmail.com",
      to: `${email}`,
      subject: "Welcome to NextAPI",
      html: `
      <div>
        <div style="background-color:${color}">цвет стакана: ${color}</div>
      </div>
      `,
      attachments: [
        {
          filename: 'logo.jpg',
          content: logo.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'logoSource.jpg',
          content: logoSource.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'background.jpg',
          content: background.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'backgroundSource.jpg',
          content: backgroundSource.split("base64,")[1],
          encoding: 'base64',
        }
      ],
    });
  } catch (e) {
    return res.status(500).json({'error': (e as Error).toString()});
  }
  return res.status(200).json({message: "Email sent successfully"});
}

export default handler;

/*
//base64path
      attachments: [
        {   // encoded string as an attachment
          filename: 'cat.jpg',
          path: logo,
        cid: "unique@nodemailer.com"
        }
      ],
*/
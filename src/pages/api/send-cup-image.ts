import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmailImage } from "@/lib/email-image";

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '50mb' // Set desired value here
      }
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, color, logo, logoSource, background,  backgroundSource, cupImage64} = req.body;

  //console.log({cupImage64, logo});
  
  try {
    await sendEmailImage({
 //     to: "gluhovog3d@gmail.com",
      to: `${email}`,
      subject: "Perfavore",
      html: `
      <div>
        <div>цвет стакана: ${color}</div>
        <div style="background-color:${color}">цвет</div>
      </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          content: logo.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'logoSource.png',
          content: logoSource.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'background.png',
          content: background.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'backgroundSource.png',
          content: backgroundSource.split("base64,")[1],
          encoding: 'base64',
        },
        {
          filename: 'cup.png',
          content: cupImage64.split("base64,")[1],
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
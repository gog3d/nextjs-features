import type { NextApiRequest, NextApiResponse } from "next";
//import { render } from "@react-email/render";
//import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "@/lib/email";

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '5mb' // Set desired value here
      }
  }
}


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { companyName, tel, name, email, checkboxItems, textArea } = req.body;
  const items = checkboxItems.filter((item: string) => item!='')
  try {
    await sendEmail({
 //     to: "gluhovog3d@gmail.com",
      to: `${email}`,
      subject: "Perfavore",
      html: `
      <div>
        <h1>Наименование компании: ${companyName}</h1>
        <h1>Телефон: ${tel}</h1>
        <h1>Имя: ${name}</h1>
        <h1>Адрес электронной почты: ${email}</h1>
        <h1>Интересуемые категрии товаров:</h1>
        <h2> ${items.join(', ')}</h2>
        <h1>Текст сообщения:</h1>
        <h2>${textArea}</h2>
      </div>
      `
    });
  } catch (e) {
    return res.status(500).json({'error': (e as Error).toString()});
  }
  return res.status(200).json({message: "Email sent successfully"});
}

export default handler;
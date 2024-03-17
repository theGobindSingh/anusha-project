import transMailer from "@/clients/nodemailer";
import type { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const mail = await transMailer.sendMail({
        from: "pawsandclawsmitra@gmail.com",
        to: ["theg8anusha72@gmail.com", "aishwarya.tewari19@gmail.com"],
        subject: `Rescue from ${req?.body?.email}`,
        html: `<p>Name: ${req.body.name} </p>
            <p>Phone number: ${req.body.phonenumber} </p>
            <p>address where animal is: ${req.body.addressani} </p>
            <p>Description of animal: ${req.body.desc} </p>
            <img src="${req.body.img}" />
           `
      });
      res.status(200).json({ "success msg": mail.response });
    } catch {
      res.status(500).json({ "error msg": "something went wrong" });
    }
  }
};

export default handler;

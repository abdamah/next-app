import WelcomeToEmalTemplate from "@/emails/WelcomeToEmalTemplate";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  return resend.emails.send({
    from: "...",
    to: "riigsoft@gmail.com",
    subject: "Welcome to",
    react: <WelcomeToEmalTemplate name="Abdallah" />,
  });
}

import { resend } from "./mailer";
import type { ReactElement } from "react";

export async function sendMail<T>({
  to,
  subject,
  template,
  props,
}: {
  to: string | string[];
  subject: string;
  template: (props: T) => ReactElement;
  props: T;
}) {
  const { data, error } = await resend.emails.send({
    from: "Website Enquiry <onboarding@resend.dev>",
    to,
    subject,
    react: template(props),
  });

  if (error) {
    console.error("Resend API error:", error);
    throw new Error(`Email sending failed: ${JSON.stringify(error)}`);
  }

  return data;
}

"use server";

import { sendMail } from "@/lib/mail/sendMail";
import {
  ContactEmail,
  ContactEmailProps,
} from "@/lib/mail/templates/enquiryTemplate";

export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  enquireAbout: string;
  message: string;
}

export async function sendContactAction(data: ContactFormValues) {
  const props: ContactEmailProps = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    enquireAbout: data.enquireAbout,
    message: data.message,
  };

  await sendMail<ContactEmailProps>({
    to: ["eetdmc@gmail.com"],
    subject: `New Enquiry from ${data.name}`,
    template: (p) => ContactEmail(p),
    props,
  });
}

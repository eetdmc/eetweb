import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContactEnquiry extends Document {
  name: string;
  phone: string;
  email: string;
  enquireAbout: string;
  message: string;
  createdAt: Date;
}

const ContactEnquirySchema = new Schema<IContactEnquiry>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    enquireAbout: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactEnquiry: Model<IContactEnquiry> =
  mongoose.models.ContactEnquiry ||
  mongoose.model<IContactEnquiry>("ContactEnquiry", ContactEnquirySchema);

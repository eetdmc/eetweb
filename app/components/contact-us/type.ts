export interface ContactFirstSection {
  mainTitle: string;
  subTitle: string;
  imageAlt: string;
  phone: string;
  address: string;
  email: string;
  map: string;
  image: string;
}

export interface ContactData {
  data: {
    firstSection: ContactFirstSection;
    _id: string;
    __v: number;
    metaDescription: string;
    metaTitle: string;
  };
  message: string;
}

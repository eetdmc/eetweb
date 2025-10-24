export interface ServiceItem {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  _id: string;
}

export interface ServiceProcessItem {
  title: string;
  description: string;
  _id: string;
}

export interface ServiceFirstSection {
  ctaHome: string;
  descriptionHome: string;
  mainTitle: string;
  subTitle: string;
  thirdTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export interface ServiceSecondSection {
  title: string;
  items: ServiceItem[];
}

export interface ServiceThirdSection {
  title: string;
  items: ServiceItem[];
}

export interface ServiceFourthSection {
  title: string;
  items: ServiceProcessItem[];
}

export interface ServiceData {
  _id: string;
  __v: number;
  firstSection: ServiceFirstSection;
  secondSection: ServiceSecondSection;
  thirdSection: ServiceThirdSection;
  fourthSection: ServiceFourthSection;
}

export interface ServiceResponse {
  data: ServiceData;
  message: string;
}

// types.ts

export interface BannerItem {
  _id: string;
  image: string;
  imageAlt: string;
  title: string;
  cta: string;
}

export interface BannerSection {
  items: BannerItem[];
}

export interface SecondSection {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface ThirdSectionItem {
  _id: string;
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
}

export interface ThirdSection {
  bigImage: string;
  bigImageAlt: string;
  smallImage: string;
  smallImageAlt: string;
  items: ThirdSectionItem[];
}

export interface FourthSection {
  mainTitle: string;
  subTitle: string;
}
export interface FifthSection {
  mainTitle: string;
  subTitle: string;
}

export interface SeventhSectionItem {
  _id: string;
  title: string;
  description: string;
}

export interface SeventhSection {
  title: string;
  items: SeventhSectionItem[];
}

export interface HomeData {
  _id: string;
  __v: number;
  bannerSection: BannerSection;
  secondSection: SecondSection;
  thirdSection: ThirdSection;
  fourthSection: FourthSection;
  fifthSection: FifthSection;
  seventhSection: SeventhSection;
  metaTitle: string;
  metaDescription: string;
}

export interface HomeResponse {
  data: HomeData;
  message: string;
}

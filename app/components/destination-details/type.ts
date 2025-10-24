export interface DestinationResponse {
  data: DestinationData;
  message: string;
}

export interface DestinationData {
  firstSection: DestinationFirstSection;
  secondSection: DestinationSecondSection;
  thirdSection: DestinationThirdSection;
  fourthSection: DestinationFourthSection;
  fifthSection: DestinationFifthSection;
  _id: string;
  __v: number;
  metaDescription: string;
  metaTitle: string;
}

export interface DestinationFirstSection {
  mainTitle: string;
  subTitle: string;
  firstVideo: string;
  firstVideoPoster: string;
  secondVideo: string;
  secondVideoPoster: string;
  description: string;
  firstImage: string;
  secondImage: string;
  slug: string;
}

export interface DestinationSecondSection {
  title: string;
  description: string;
}

export interface DestinationThirdSection {
  title: string;
  items: DestinationThirdItem[];
}

export interface DestinationThirdItem {
  _id: string;
  image: string;
  imageAlt: string;
  title: string;
}

export interface DestinationFourthSection {
  title: string;
  items: DestinationFourthItem[];
}

export interface DestinationFourthItem {
  _id: string;
  image: string;
  imageAlt: string;
}

export interface DestinationFifthSection {
  title: string;
  items: DestinationFifthItem[];
}

export interface DestinationFifthItem {
  _id: string;
  image: string;
  imageAlt: string;
  title: string;
}

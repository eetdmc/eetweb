// types.ts

export interface AboutData {
  data: {
    firstSection: {
      mainTitle: string;
      subTitle: string;
      imageAlt: string;
      description: string;
      image: string;
    };
    secondSection: {
      title: string;
      description: string;
    };
    thirdSection: {
      items: ThirdSectionItem[];
    };
    fourthSection: {
      title: string;
      items: FourthSectionItem[];
    };
    _id: string;
    __v: number;
    metaDescription: string;
    metaTitle: string;
  };
  message: string;
}

export interface ThirdSectionItem {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  _id: string;
}

export interface FourthSectionItem {
  logo: string;
  logoAlt: string;
  title: string;
  description: string;
  _id: string;
}

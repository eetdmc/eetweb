export interface TeamData {
  data: {
    firstSection: {
      mainTitle: string;
      subTitle: string;
      description: string;
    };
    secondSection: {
      title: string;
      items: {
        image: string;
        imageAlt: string;
        title: string;
        designation: string;
        _id: string;
      }[];
    };
    thirdSection: {
      title: string;
      description: string;
      firstImage: string;
      firstImageAlt: string;
      secondImage: string;
      secondImageAlt: string;
    };
    fourthSection: {
      items: any[];
    };
    _id: string;
    __v: number;
    metaTitle: string;
    metaDescription: string;
  };
  message: string;
}

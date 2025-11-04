export interface PartnerData {
  data: {
    firstSection: {
      mainTitle: string;
      subTitle: string;
      description: string;
      items: {
        image: string;
        imageAlt: string;
        title: string;
        _id: string;
      }[];
    };
    _id: string;
    __v: number;
    metaTitle: string;
    metaDescription: string;
  };
  message: string;
}

export interface AwardItem {
  image: string;
  imageAlt: string;
  year: string;
  title: string;
  _id: string;
}

export interface AwardFirstSection {
  mainTitle: string;
  subTitle: string;
  description: string;
  items: AwardItem[];
}

export interface AwardData {
  data: {
    firstSection: AwardFirstSection;
    _id: string;
    __v: number;
    metaDescription: string;
    metaTitle: string;
  };
  message: string;
}

export type ServiceProps = {
    metaTitle: string;
    metaDescription: string;
    firstSection: {
        title: string;
        image: string;
        imageAlt: string;
    };
    secondSection: {
        items: {
            title: string;
            image: string;
            imageAlt: string;
            description: string;
        }[];
    };
}
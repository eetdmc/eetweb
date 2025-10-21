import mongoose from "mongoose";

const uaeSchema = new mongoose.Schema({
    metaTitle: {
        type: String,

    },
    metaDescription: {
        type: String,

    },
    firstSection: {
        mainTitle: {
            type: String,

        },
        subTitle: {
            type: String,

        },
        description: {
            type: String,

        },
        firstImage: {
            type: String,

        },
        firstImageAlt: {
            type: String,
        },
        secondImage: {
            type: String,

        },
        secondImageAlt: {
            type: String,
        },
    },
    secondSection: {
        title: {
            type: String,

        },
        description: {
            type: String,

        },
    },
    thirdSection: {
        title: {
            type: String,

        },
        items: [{
            image: {
                type: String,

            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,

            },
        }]
    },
    fourthSection: {
        title: {
            type: String,

        },
        items: [{
            image: {
                type: String,

            },
            imageAlt: {
                type: String,
            },
        }],
    },
    fifthSection: {
        title: {
            type: String,

        },
        items: [{
            image: {
                type: String,

            },
            imageAlt: {
                type: String,
            },
            title: {
                type: String,

            },
        }]
    }
})

export default mongoose.models.UAE || mongoose.model("UAE", uaeSchema);
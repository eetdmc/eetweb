import mongoose from "mongoose";

const miceSchema = new mongoose.Schema({
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
    ctaHome: {
      type: String,
    },
    thirdTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  secondSection: {
    title: {
      type: String,
    },
    items: [
      {
        image: {
          type: String,
        },
        imageAlt: {
          type: String,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  thirdSection: {
    title: {
      type: String,
    },
    items: [
      {
        image: {
          type: String,
        },
        imageAlt: {
          type: String,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  fourthSection: {
    title: {
      type: String,
    },
    items: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
});

export default mongoose.models.Mice || mongoose.model("Mice", miceSchema);

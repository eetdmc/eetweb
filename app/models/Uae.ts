import mongoose from "mongoose";

const uaeSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  firstSection: {
    location: {
      type: String,
    },
    mainTitle: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    firstVideo: {
      type: String,
    },
    firstVideoPoster: {
      type: String,
    },
    secondVideo: {
      type: String,
    },
    secondVideoPoster: {
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
    description: {
      type: String,
    },
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
      },
    ],
  },
  fourthSection: {
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
      },
    ],
  },
  fifthSection: {
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
      },
    ],
  },
});

export default mongoose.models.UAE || mongoose.model("UAE", uaeSchema);

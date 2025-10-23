import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  bannerSection: {
    items: [
      {
        image: {
          type: String,
          required: true,
        },
        imageAlt: {
          type: String,
        },
        title: {
          type: String,
          required: true,
        },
        cta: {
          type: String,
          required: true,
        },
      },
    ],
  },
  secondSection: {
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  thirdSection: {
    bigImage: {
      type: String,
      required: true,
    },
    bigImageAlt: {
      type: String,
    },
    smallImage: {
      type: String,
      required: true,
    },
    smallImageAlt: {
      type: String,
    },
    items: [
      {
        logo: {
          type: String,
          required: true,
        },
        logoAlt: {
          type: String,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
  //   fourthSection: {
  //     mainTitle: {
  //       type: String,
  //       required: true,
  //     },
  //     subTitle: {
  //       type: String,
  //       required: true,
  //     },
  //     items: [
  //       {
  //         image: {
  //           type: String,
  //           required: true,
  //         },
  //         imageAlt: {
  //           type: String,
  //         },
  //         title: {
  //           type: String,
  //           required: true,
  //         },
  //         description: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //     ],
  //   },
  //   fifthSection: {
  //     mainTitle: {
  //       type: String,
  //       required: true,
  //     },
  //     subTitle: {
  //       type: String,
  //       required: true,
  //     },
  //     items: [
  //       {
  //         image: {
  //           type: String,
  //           required: true,
  //         },
  //         imageAlt: {
  //           type: String,
  //         },
  //         title: {
  //           type: String,
  //           required: true,
  //         },
  //         number: {
  //           type: String,
  //           required: true,
  //         },
  //         value: {
  //           type: String,
  //           required: true,
  //         },
  //         locations: [
  //           {
  //             title: {
  //               type: String,
  //               required: true,
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  seventhSection: {
    title: {
      type: String,
      required: true,
    },
    items: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

export default mongoose.models.Home || mongoose.model("Home", homeSchema);

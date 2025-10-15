import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    metaTitle:{
        type:String,
        required:true
    },
    metaDescription:{
        type:String,
        required:true
    },
    firstSection:{
        mainTitle:{
            type:String,
            required:true
        },
        subTitle:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        items:[{
            image:{
                type:String,
                required:true
            },
            imageAlt:{
                type:String,
            }
        }]
    },
})

export default mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
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
        items:[{
            image:{
                type:String,
                required:true
            },
            imageAlt:{
                type:String,
            },
            year:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            }
        }]
    },
})

export default mongoose.models.Award || mongoose.model("Award", awardSchema);
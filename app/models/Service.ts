import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    metaTitle:{
        type:String,
        required:true
    },
    metaDescription:{
        type:String,
        required:true
    },
    firstSection:{
       title:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        imageAlt:{
            type:String,
        },
    },
    secondSection:{
        items:[{
            title:{
                type:String,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            imageAlt:{
                type:String,
            },
            description:{
                type:String,
                required:true
            },
            homeImage:{
                type:String,
                required:true
            },
            homeImageAlt:{
                type:String,
            },
            homeDescription:{
                type:String,
                required:true
            }
        }]
    }
})

export default mongoose.models.Service || mongoose.model("Service", serviceSchema);
import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    email:{
        type:String,
        required:true
    },
    dateofBirth:{
        type:Date,
        required:true,
    },
    rollNumber:{
        type:Number,
        required:true
        },
})
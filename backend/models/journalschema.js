import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
   id:{
    type: Number
   },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   type:{
    type:String,
   }

}, {timestamps:true})

export default mongoose.model("journal", journalSchema)
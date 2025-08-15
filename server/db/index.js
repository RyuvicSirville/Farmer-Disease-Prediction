const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
      type:String,
      required:true,  
    }
})



const quesSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    quesTitle: {
        type: String,
    },
    qid:{
        type:Number,
        required:true,
        unique:true,
    },
    quesBody: {
        type: String,
    },
    tags:{
        type:String
    },
    askedOn: {
        type: String,
    },
    votes: {
        type: Number,
    }
})

const ansSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    qid: {
        type: Number,
        required: true,
    },
    aid:{
        type:Number,
        required:true,
        unique:true
    },
    ansBody: {
        type: String,
    },
    askedOn: {
        type: String,
    },
})

const USERS = mongoose.model('Users', userSchema);
const QUES = mongoose.model('Ques', quesSchema);
const ANS = mongoose.model('Ans', ansSchema);
module.exports={
    USERS,
    QUES,
    ANS
  }
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const { USERS, QUES, ANS } = require("./db");
const { SECRET } = require("./middleware/auth")
const { authenticateJwt } = require("./middleware/auth");
require("dotenv").config();
const Gpt = require('./Gpt');
const generateUniqueId = require('./randomIds')




mongoose.connect(process.env.MONGO_URL);
var qno = 0;
var ano = 0;

function JsonConverter(data) {
    Gpt(data + "convert the above into JSON and return only in JSON nothin else is allowed ")
        .then(content => {
            console.log(content)
            return (content)
        })
        .catch(error => {

            console.error("Error:", error);
        });

}

function GptAction(){
    
}


app.post('/ai/prob', async (req, res) => {
    console.log(req.body.data)
    const data = req.body.data
    Gpt(data)
        .then(content => {
            console.log(content)
            
            try {
                const jsonObject = JSON.parse(content);
                console.log(jsonObject);
                res.json(
                    jsonObject
                )
            } catch (error) {
                res.json({error:"Try again"})
                console.error("Invalid JSON string:", error);
            }
        })
        .catch(error => {
            res.json({error:"Try again"})
            console.error("Error:", error);
        });

})

app.get('/user/me',authenticateJwt,(req,res)=>{
    res.json({
     username: req.user.username
    })
 })
app.post('/user/signup', async (req, res) => {
    const userDetails = req.body;
    const username = userDetails.username;
    const user = await USERS.findOne({ username });

    if (user) {
        console.log("User already exists");
        res.status(403).json({ message: 'User already exists' });
    }
    else {
        const newUser = new USERS(userDetails);
        await newUser.save();
        const token = jwt.sign({ username: username, role: 'user' }, SECRET, { expiresIn: process.env.TOKEN_TIMEOUT });
        console.log("User created successfully");
        res.json({ message: 'User created successfully', user, token });
    }
});


app.post('/user/login', async (req, res) => {
    console.log(USERS);
    const userDetails = req.body;
    const reg = {
        username: userDetails.username,
        password: userDetails.password
    }
    const user = await USERS.findOne(reg);
    console.log(user);
    if (user) {
        const token = jwt.sign({ username: reg.username, role: 'user' }, SECRET, { expiresIn: process.env.TOKEN_TIMEOUT });
        res.json({ message: 'User found successfully', user, token });
    } else {
        res.status(403).json(user);
    }
}
);

app.post('/user/quesPost', async (req, res) => {
    console.log(USERS);
    const userDetails = req.body;
    const reg = {
        username: userDetails.username
    }
    const user = await USERS.findOne(reg);
    console.log(user);
    if (user) {
        qno = generateUniqueId();
        const newQues = new QUES({
            username: userDetails.username,
            quesTitle: userDetails.quesTitle,
            qid: qno,
            quesBody: userDetails.quesBody,
            tags: userDetails.tags,
            askedOn: userDetails.askedOn,
            votes: userDetails.votes
        })
        await newQues.save();
        res.json({ message: 'User found successfully', user });
    } else {
        res.status(403).json(user);
    }
}
);
app.post('/user/ansPost', async (req, res) => {
    console.log(USERS);
    const userDetails = req.body;
    const reg = {
        username: userDetails.username
    }
    const user = await USERS.findOne(reg);
    console.log(user);
    if (user) {
        ano = generateUniqueId();
        const newAns = new ANS({
            username: userDetails.username,
            qid: userDetails.qid,
            aid: ano,
            ansBody: userDetails.ansBody,
            askedOn: userDetails.askedOn
        })
        await newAns.save();
        res.json({ message: 'User found successfully', user });
    } else {
        res.status(403).json(user);
    }
}
);
app.get('/user/allQues', async (req, res) => {
    const ques = await QUES.find({});
    res.json({
        ques: ques
    })
})
app.get('/user/ques/:id', async (req, res) => {
    const ques = await QUES.findOne({ qid: req.params.id });
    const ans = await ANS.find({ qid: req.params.id });
    res.json({
        data: {
            ques: ques,
            ans: ans    
        }

    })
})










app.listen(8001, () => console.log('Server running on port 8001'));


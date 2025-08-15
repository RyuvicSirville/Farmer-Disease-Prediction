const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function Gpt(data) {
  try {
    const chatCompletion = await getGroqChatCompletion(data);
    const content = chatCompletion.choices[0]?.message?.content || "";
    return content;  
  } catch (error) {
    console.error("Error:", error);
    throw error;  
  }
}

async function getGroqChatCompletion(data) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content: "donot ever answer except in json ,you should provide ans in steps to cure the provided symptoms , provide medicines and its doses that can be used   , and you are allowed to provide output only in json format in the following format just start and end in JSON format {disease: {name: , description: },steps: [step1: {title: ,description: ,notes: ] ,},medicines: {medicine1 name: {dose: ,frequency: ,notes: } }} donot provied extra string or text except",
      },
      {
        role: "user",
        content: data,
      },
    ],
    model: "llama3-8b-8192",
  });
}


module.exports = Gpt;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { returnUser } from "./HomeMainbar/QuestionList";
import "./AskQuestion.css";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
const CommunityASk = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();



  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <>
    <div className="bg-[#f1f2f3]">
    <Header/>
    
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value)
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <button className="review-btn"
            onClick={() => {

              function callback2(data) {
                //console.log(data.courses)
                
                //console.log(data.courses[0].id)
              }
              function callback1(res) {
                res.json().then(callback2)
              }
              fetch("http://localhost:8001/user/quesPost  ", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",  // Set Content-Type header
                },
                body: JSON.stringify({
                  username: "Boy",
                  quesTitle: questionTitle,
                  quesBody: questionBody,
                  tags: questionTags,
                  askedOn: "today"
                })

              }).then(callback1)




              window.location ="/community"
            }}
          >Submit</button>



        </form>
      </div>
    </div>
    <br></br>
    <Footer/>
    </div>
    </>
  );
};

export default CommunityASk;

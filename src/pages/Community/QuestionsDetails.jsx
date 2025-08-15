import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import upvote from "/assets/sort-up.svg";
import downvote from "/assets/sort-down.svg";
import "./Questions.css";
import Avatar from "./Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { returnElem } from "./HomeMainbar/Questions";
import Header from "../../componets/Header";
const QuestionsDetails = () => {
  const navigate = useNavigate();
  let { qid } = useParams();
  //var qid = returnElem().qid;
  const [Answer, setAnswer] = useState("");
  const [quesTitle, setQuestionTitle] = useState("")
  const [allData, setAllData] = useState([])

  const [quesBody, setQuestionBody] = useState("");
  const [quesTags, setQuestionTags] = useState([]);
  const [quesVotes, setQuestionVotes] = useState(0);
  const [askedOn, setAskedOn] = useState("");
  const [username, setUsername] = useState("");
  const [answers, setAnswers] = useState([]);
  console.log(qid)
  if (qid === undefined || qid === null) {
    qid = "1725199326846"
    console.log("HIHIHIH")
    setQuestionTitle("")
    setAllData([])
  }
  else {
    try {
      useEffect(() => {
        function callback2(data) {
          //console.log(data.courses)
          setAllData(data.data)
          setQuestionTitle(data.data.ques.quesTitle)
          setQuestionBody(data.data.ques.quesBody)
          setQuestionTags(data.data.ques.tags)
          setQuestionVotes(data.data.ques.votes)
          setAskedOn(data.data.ques.askedOn)
          setUsername(data.data.ques.username)
          setAnswers(data.data.ans)
          console.log(answers)
          console.log(allData)
        }
        function callback1(res) {
          res.json().then(callback2)
        }
        fetch("http://localhost:8001/user/ques/" + qid, {
          method: "GET",

        }).then(callback1)

      }, []);
    } catch (error) {

    }

  }




  return (
    <div >
      <Header></Header>
      <div className="question-details-page pr-4" >

        <>

          <div key="hello">
            <section className="question-details-container">

              <h1 className="text-2xl">{quesTitle}</h1>
              <br></br>
              <div className="grid grid-cols-8 gap-4 ">

                <div className="question-votes col-start-1 col-end-2 justify-self-center">
                  <img
                    src={upvote}
                    alt=""
                    width="18"
                    className="votes-icon"

                  />
                  <p>{quesVotes}</p>
                  <img
                    src={downvote}
                    alt=""
                    width="18"
                    className="votes-icon"

                  />
                </div>
                <div style={{ width: "100%" }} className="col-start-2 col-span-7">
                  <p className="question-body">{quesBody}</p>
                  <div className="question-details-tags">

                    <p key="hello">{quesTags}</p>

                  </div>
                  <div className="question-actions-user">
                    <div>
                      <button type="button" >
                        Share
                      </button>

                      <button type="button" >
                        Delete
                      </button>

                    </div>
                    <div>
                      <p>asked on {askedOn}</p>
                      <div

                        className="user-link"
                        style={{ color: "#0086d8" }}
                      >
                        <Avatar
                          backgroundColor="orange"
                          px="8px"
                          py="5px"
                          borderRadius="4px"
                        >
                          R
                        </Avatar>
                        <div>{username}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>

              <h3>1 Answers</h3>
              {answers.map(ans => {
                return <DisplayAnswer ans={ans} />
              })}

              <DisplayAnswer

              />
            </section>

            <section className="post-ans-container">
              <h3>Your Answer</h3>
              <form

              >
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={Answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></textarea>
                <br />
                <input

                  type="submit"
                  className="post-ans-btn"
                  value="Post Your Answer"
                  onClick={() => {
                    function callback2(data) {
                    }
                    function callback1(res) {
                      res.json().then(callback2)
                    }
                    fetch("http://localhost:8001/user/ansPost  ", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",  
                      },
                      body: JSON.stringify({
                        username: "Samir Bhuyan",
                        qid:qid,
                        ansBody: Answer,
                        askedOn: "today",
                      })

                    }).then(callback1)
                    

                  }}
                />
              </form>
              <p>
                Browse other Question tagged

                <button key="tag" className="ans-tags">
                  {" "}
                  "hello"{" "}
                </button>
                {" "}
                or {" "}
                <button
                  to="/AskQuestion"
                  style={{ textDecoration: "none", color: "#009dff" }}
                >
                  {" "}
                  ask your own question.
                </button>
              </p>
            </section>
          </div>

        </>

      </div>
    </div>
  );
};

export default QuestionsDetails;

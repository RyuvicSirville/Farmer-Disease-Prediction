import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let username, qid, quesTitle, quesBody, tags, askedOn, votes;

const Questions = (props) => {
  const navigate = useNavigate();

  
  if (!props.ques) {
    return null; 
  }

  const [allData,setAllData]=useState([])
  const {
    username: propUsername,
    qid: propQid,
    quesTitle: propQuesTitle,
    quesBody: propQuesBody,
    tags: propTags,
    askedOn: propAskedOn,
    votes: propVotes,
  } = props.ques;

  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{propVotes}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>2</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <button
          className="question-title-link font-mono"
          onClick={() => {
            
            username = propUsername;
            qid = propQid;
            quesTitle = propQuesTitle;
            quesBody = propQuesBody;
            tags = propTags;
            askedOn = propAskedOn;
            votes = propVotes;

            
            
            
            navigate("/questionDetails/" + qid);
          }}
        >
          {propQuesTitle}
        </button>
        <div className="display-tags-time">
          <div className="display-tags">
            <p key={propTags}>{propTags}</p>
          </div>
          <p className="display-time">asked {propAskedOn}</p>
        </div>
      </div>
    </div>
  );
};

export function returnElem() {
  return {
    qid: qid,
    quesTitle:quesTitle
  };
}

export default Questions;

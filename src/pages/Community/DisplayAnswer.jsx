import React from "react";
import Avatar from "./Avatar";

const DisplayAnswer = ({ ans }) => {
  if (!ans) {
    return null; // or you can return a loading spinner or a placeholder
  }

  const { aid: propAid, ansBody: propAnsBody, askedOn: propAskedOn, username: propUsername, qid: propQid } = ans;

  return (
    <div>
      <div className="display-ans">
        <p>{propAnsBody}</p>
        <div className="question-actions-user">
          <div>
            <button type="button">Share</button>
            <button type="button">Delete</button>
          </div>
          <div>
            <p>answered {propAskedOn}</p>
            <div className="user-link" style={{ color: "#0086d8" }}>
              <Avatar
                backgroundColor="lightgreen"
                px="8px"
                py="5px"
                borderRadius="4px"
              >
                {propUsername.charAt(0).toUpperCase()}
              </Avatar>
              <div>{propUsername}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAnswer;

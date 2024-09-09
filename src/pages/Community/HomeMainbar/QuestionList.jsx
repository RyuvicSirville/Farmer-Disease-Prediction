import React from "react";
import Questions from "./Questions";
import {useEffect , useState} from "react";
let username = ""
const QuestionList = () => {
  const[allQues,setallQues] = useState([])
  useEffect(()=> {
    function callback2(data){
        //console.log(data.courses)
        setallQues(data.ques)
        username=data.ques.username
        //console.log(data.courses[0].id)
    }
    function callback1(res){
        res.json().then(callback2)
    }
    fetch("http://localhost:8001/user/allQues  ",{
        method:"GET",
        
    }).then(callback1)
      
},[]);


  return (
    <>
        {allQues.map(ques => {
            return<Questions  ques={ques}/>
        })}
        <Questions  key="hello" />
      
    </>
  );
};

export function returnUser() {
  return {
    username: username
  };
}

export default QuestionList;

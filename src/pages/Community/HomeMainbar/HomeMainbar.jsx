import React from "react";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useNavigate } from "react-router-dom";
import {useEffect , useState} from "react";
import { returnUser } from "./QuestionList";
import Header from "../../../componets/Header";
import Footer from "../../../componets/Footer";
const HomeMainbar = () => {

  const navigate = useNavigate()

  


  return (
    <>
    <div >
    <Header></Header>
    <div className="main-bar pr-10 pl-10">
      <div className="main-bar-header">

        <p className="text-2xl font-bold ">Questions</p>

        <button className="ask-btn" onClick={() => {
          
          navigate("/askQuestion") 
          }}>
          Ask Question
        </button>
      </div>
      <div>

        <>
          <p>2 questions</p>
          <QuestionList />
        </>

      </div>
    </div>
    
    </div>
    </>
  );
};

export default HomeMainbar;

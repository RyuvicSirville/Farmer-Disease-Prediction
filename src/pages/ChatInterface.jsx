import React, { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import '../App.css';

const ChatInterface = () => {
  var problemString = "";
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [currentQuestionId, setCurrentQuestionId] = useState(-10);
  const [isTyping, setIsTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // State to control the visibility of introductory divs
  const chatEndRef = useRef(null);
  const [userProblem, setUserProblem] = useState('');
  const [userSol, setUserSol] = useState(null);

  useEffect(() => {
    if (userSol && currentQuestionId === 4) {
      // Now userSol is updated and can be used to display the JSON response
      const jsonResponse = userSol;

      const renderJson = (obj, depth = 0) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            addBotMessage({ text: `${'  '.repeat(depth)}[${key}]:`, options: [] });
            renderJson(value, depth + 1);
          } else {
            addBotMessage({ text: `${'  '.repeat(depth)}[${key}]: ${value}`, options: [] });
          }
        });
      };

      renderJson(jsonResponse);

      // Proceed to the next question
      const nextQuestion = questions.find((q) => q.id === 5);
      if (nextQuestion) {
        addBotMessage(nextQuestion);
        setCurrentQuestionId(5);
      }
    }
  }, [userSol]);
  const questions = [
    {
      id: 2,
      text: 'What is the specific type of the animal?',
      options: [
        { text: 'Cattle', nextQuestionId: 4 },
        { text: 'Goat', nextQuestionId: 4 },
        { text: 'Sheep', nextQuestionId: 4 },
      ],
    },
    {
      id: 3,
      text: 'What is the specific type of the Plant?',
      options: [
        { text: 'Rice', nextQuestionId: 4 },
        { text: 'Wheat', nextQuestionId: 4 },
        { text: 'Pulses', nextQuestionId: 4 },
      ],
    },
    {
      id: 4,
      text: 'Describe your problem',
      options: [],
    },
    {
      id: 5,
      text: 'Are you satisfied with the solution?',
      options: [
        { text: 'Yes', nextQuestionId: null },
        { text: 'Want to add more details', nextQuestionId: 4 },
        { text: 'Want physical Guidance', nextQuestionId: 6 },
      ],
    },
    {
      id: 6,
      text: 'Do you want to contact a Vet?',
      options: [
        { text: 'Yes', nextQuestionId: 7 },
        { text: 'No', nextQuestionId: null },
      ],
    },
    {
      id: 7,
      text: 'Register a Complaint?',
      options: [
        { text: 'Yes', nextQuestionId: null },
        { text: 'No', nextQuestionId: null },
      ],
    },
  ];

  useEffect(() => {
    if (!initialized) {
      const firstQuestion = questions.find(q => q.id === 1);
      if (firstQuestion) {
        addBotMessage(firstQuestion);
        setCurrentQuestionId(1);
        setInitialized(true);
      }
    }
  }, [initialized]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  useEffect(() => {
    if (currentQuestionId === 4) {
      setUserProblem(prevProblem => prevProblem + ' ' + userInput);
    }
  }, [userInput, currentQuestionId]);

  const addBotMessage = (question) => {
    if (!question || !question.text) return;
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', content: question },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionSelect = (option) => {
    if (!option || !option.text) return;
    setMessages((prevMessages) => [...prevMessages, { type: 'user', content: option.text }]);
    const nextQuestion = questions.find((q) => q.id === option.nextQuestionId);
    if (nextQuestion) {
      setCurrentQuestionId(option.nextQuestionId);
      addBotMessage(nextQuestion);
    } else {
      addBotMessage({ text: 'Thank you for chatting with us!', options: [] });
      setTimeout(() => {
        addBotMessage({
          text: 'Would you like to start again?',
          options: [{ text: 'Start Again', nextQuestionId: 1 }],
        });
      }, 1000);
    }
  };

  const handleUserInputSubmit = () => {
    if (!userInput.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { type: 'user', content: userInput }]);

    if (currentQuestionId === 4) {
      // Trigger fetch request
      fetch("http://localhost:8001/ai/prob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Set Content-Type header
        },
        body: JSON.stringify({ data: userInput }) // Use userInput directly
      })
        .then(response => response.json())
        .then(data => {
          setUserSol(data);  // This will update userSol state
        });
    } else {
      const nextQuestion = questions.find((q) => q.id === currentQuestionId)?.nextQuestionId;
      if (nextQuestion) {
        const nextQuestionDetails = questions.find((q) => q.id === nextQuestion);
        if (nextQuestionDetails) {
          addBotMessage(nextQuestionDetails);
          setCurrentQuestionId(nextQuestion);
        }
      }
    }

    setUserInput('');
  };




  const handleRestart = () => {
    setMessages([]);
    setCurrentQuestionId(null);
    setInitialized(false);
  };

  const handleAnimalClick = () => {
    setShowIntro(false); // Hide the introductory divs
    const question = questions.find((q) => q.id === 2);
    if (question) {
      setCurrentQuestionId(2);
      addBotMessage(question);
    }
  };

  const handlePlantClick = () => {
    setShowIntro(false); // Hide the introductory divs
    const question = questions.find((q) => q.id === 3);
    if (question) {
      setCurrentQuestionId(3);
      addBotMessage(question);
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-indigo-950 to-cyan-950 flex-col h-screen bg-base-medium">
      <div>
        <div></div>
        <div></div>
      </div>
      <div className="p-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-theme-color-primary-content text-slate-400 ">AArogyam-AI</h1>
      </div>

      {showIntro && (
        <>
          <div className="justify self centre">
            <p
              className="py-4 px-20 text-4xl md:text-5xl xl:text-7xl font-semi--bold text-white font-bold "
              style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
            >
              Hello Farmer
            </p>
            <p
              className="py-4 px-20 text-4xl md:text-5xl xl:text-7xl font-semi--bold text-white font-bold "
              style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
            >
              Choose The Form of Livestock
            </p>
          </div>
          <div className="center-container py-20">
            <button
              id="animal"
              onClick={handleAnimalClick}
              className="rounded-full bg-stone-900 hover:bg-theme-color-base-dark transition-colors hover:bg-blue-600 active:bg-blue-700 big-button border-double text-white border-2 border-blue-500"
            >
              Animal
            </button>
            <button
              id="plant"
              onClick={handlePlantClick}
              className="rounded-full bg-stone-900 hover:bg-theme-color-base-dark transition-colors hover:bg-blue-600 active:bg-blue-700 big-button border-double text-white border-2 border-blue-500"
            >
              Plants
            </button>
          </div>
        </>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} `}
          >
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg p-3 rounded-lg shadow-xl shadow-sky-900/50 ${message.type === 'user'
                  ? 'bg-theme-color-secondary text-theme-color-secondary-content text-white'
                  : 'bg-theme-color-neutral text-theme-color-neutral-content text-white'
                }`}
            >
              <p>{message.type === 'bot' ? message.content.text : message.content}</p>
              {message.type === 'bot' && message.content.options?.length > 0 && (
                <div className="mt-2 space-y-2">
                  {message.content.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left p-2 rounded-md bg-blue-900 hover:bg-theme-color-base-dark transition-colors hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 duration-200 focus:outline-none focus:ring-2 focus:ring-theme-color-primary"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
              {message.type === 'bot' && message.content.text === 'Would you like to start again?' && (
                <button
                  onClick={handleRestart}
                  className="w-full mt-2 p-2 rounded-md bg-theme-color-base hover:bg-theme-color-base-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-theme-color-primary"
                >
                  Click to register complaint
                </button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-theme-color-neutral text-theme-color-neutral-content p-3 rounded-lg shadow-lg">
              <p className="text-white	">Typing...</p>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 bg-theme-color-neutral">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value)
              if (currentQuestionId === 4) {
                const updatedProblemString = userProblem + e.target.value;
                console.log(updatedProblemString);
                setUserProblem(updatedProblemString);
                //console.log(userProblem);
              }
            }}
            className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-theme-color-primary"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserInputSubmit();
              }
            }}
          />
          <button
            onClick={() => {

              handleUserInputSubmit();
            }}
            className="p-2 bg-theme-color-primary hover:bg-theme-color-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-theme-color-primary text-white rounded-md"
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

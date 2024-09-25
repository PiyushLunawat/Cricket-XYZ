import React, { useState, useEffect } from "react";
import { questions } from "../store/data.js"; 
import back from "../assets/img/back.svg";
 
const shuffleQuestions = (array, num) => {
  const shuffled = array.sort(() => Math.random() - 0.5); 
  return shuffled.slice(0, num); 
};

const Quiz = ({ setActiveComponent }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(questions, 5)); 
  }, []);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === shuffledQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setShuffledQuestions(shuffleQuestions(questions, 5));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
   <>
   <div className={`flex bg-black bg-opacity-90 w-fit text-white text-3xl font-bold p-4 shadow-lg gap-4 ${showScore ? 'mb-8' : 'mb-4'}`}>
     <img src={back} alt="<-" className="w-8 cursor-pointer" onClick={() => setActiveComponent("")}/> 
     The Umpire's Call
   </div>
    <div className="quiz-container bg-black bg-opacity-50 text-white p-8 rounded-lg shadow-lg">
      {showScore ? (
        <div className="text-center ">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-lg">
            You scored {score} out of {shuffledQuestions.length}
          </p>
          <button
            className="bg-black px-8 py-2 mt-4 font-bold text-green-500 hover:bg-[#09090b]"
            onClick={resetQuiz}
          >
            Play Again!
          </button>
        </div>
      ) : (
        <div>
          {shuffledQuestions.length > 0 && (
            <>
              <h2 className="text-xl font-bold mb-8">
                {shuffledQuestions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {shuffledQuestions[currentQuestion].options.map((option, index) => (
                  <label htmlFor={`option-${index}`} className="container flex items-center">
                    {option} 
                    <input
                      type="checkbox"
                      id={`option-${index}`}
                      name="quizOption"
                      checked={selectedOption === option}
                      onChange={() => handleCheckboxChange(option)}
                      className="mr-2 text-green-500 checkbox-custom"
                    /><span className="checkmark"></span> 
                  </label>
                ))}
              <button className="bg-black px-4 py-2 mt-4 font-bold text-green-500 hover:bg-[#09090b]" onClick={handleSubmit} disabled={!selectedOption}>
                {currentQuestion === shuffledQuestions.length - 1 ? "See Score" : "Next"}
              </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  </> 
  );
};

export default Quiz;

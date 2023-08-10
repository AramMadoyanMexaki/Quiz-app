import "./App.css";
import { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of Great Britain ?",
      answers: [
        { answer: "Washington", isCorrect: false },
        { answer: "New York", isCorrect: false },
        { answer: "Paris", isCorrect: false },
        { answer: "London", isCorrect: true }
      ]
    },
    {
      questionText: "What is the capital of Russia ?",
      answers: [
        { answer: "Minsk", isCorrect: false },
        { answer: "Kyiv", isCorrect: false },
        { answer: "Moscow", isCorrect: true },
        { answer: "Skopje", isCorrect: false }
      ]
    },
    {
      questionText: "What is capital of Armenia ?",
      answers: [
        { answer: "Tbilisi", isCorrect: false },
        { answer: "Yerevan", isCorrect: true },
        { answer: "Baku", isCorrect: false },
        { answer: "Gyumri", isCorrect: false }
      ]
    },
    {
      questionText: "What is the capital of Germany ?",
      answers: [
        { answer: "Hamburg", isCorrect: false },
        { answer: "Prague", isCorrect: false },
        { answer: "Berlin", isCorrect: true },
        { answer: "Lisabon", isCorrect: false }
      ]
    },
    {
      questionText: "What is the capital of Iran ?",
      answers: [
        { answer: "Ankara", isCorrect: false },
        { answer: "Istambul", isCorrect: false },
        { answer: "Baghdad", isCorrect: false },
        { answer: "Tehran", isCorrect: true }
      ]
    },
    // ============
    {
      questionText: "Which nation was the first to adopt Christianity?",
      answers: [
        { answer: "Romans", isCorrect: false },
        { answer: "Russian", isCorrect: false },
        { answer: "Armenians", isCorrect: true },
        { answer: "French people", isCorrect: false }
      ]
    },
    {
      questionText: "How many republics did the USSR consist of?",
      answers: [
        { answer: "13", isCorrect: false },
        { answer: "14", isCorrect: false },
        { answer: "10", isCorrect: false },
        { answer: "15", isCorrect: true }
      ]
    },
    {
      questionText: "Which ancient Armenian king is known for adopting Christianity as the state religion in the early 4th century CE?",
      answers: [
        { answer: "Tigranes the Great", isCorrect: false },
        { answer: "Artaxias I", isCorrect: false },
        { answer: "Vahagn I", isCorrect: false },
        { answer: "Tiridates III", isCorrect: true }
      ]
    },
    {
      questionText: "Who created the first color television?",
      answers: [
        { answer: "Charles Aznavour", isCorrect: false },
        { answer: "Hovannes Adamian", isCorrect: true },
        { answer: "Arshile Gorky", isCorrect: false },
        { answer: "Samuel Morse", isCorrect: false }
      ]
    },
    {
      questionText: "Which series of wars fought between the Roman Empire and the Persian Empire during the 3rd century AD are collectively known as the 'Roman-Persian Wars'?",
      answers: [
        { answer: "Punic Wars", isCorrect: false },
        { answer: "Peloponnesian Wars", isCorrect: false },
        { answer: "Greco-Persian Wars", isCorrect: false },
        { answer: "Parthian Wars", isCorrect: true }
      ]
    },
    {
      questionText: "Which document, adopted on July 4, 1776, declared the thirteen American colonies independent from British rule and is considered a foundational moment in the history of the United States?",
      answers: [
        { answer: "The Magna Carta", isCorrect: false },
        { answer: "The Emancipation Proclamation", isCorrect: false },
        { answer: "The Bill of Rights", isCorrect: false },
        { answer: "The Declaration of Independence", isCorrect: true }
      ]
    },
    {
      questionText: "When was the Battle of Gaugamela between Macedonia and Persia?",
      answers: [
        { answer: "331 BCE", isCorrect: true },
        { answer: "300 BCE", isCorrect: false },
        { answer: "451 AD", isCorrect: false },
        { answer: "330 BCE", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestionData = questions[currentQuestion];

  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      <div className="quiz">
        {showScore === true ? (
          <div className="quiz show__score">
            <p className="result">{score} correct answers out of {questions.length}</p>
          </div>
        ) : (
          <>
            <div className="quiz__descr">
              <p className="questions__number">{currentQuestion}/{questions.length}</p>
              <p className="question__text">
                {currentQuestionData.questionText}
              </p>
            </div>
            <div className="answers">
              <ul className="answers__list">
                {currentQuestionData.answers.map((answer) => {
                  return (
                    <>
                      <li>
                        <button
                          onClick={() =>
                            handleAnswerButtonClick(answer.isCorrect)
                          }
                          className="answer"
                        >
                          {answer.answer}
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

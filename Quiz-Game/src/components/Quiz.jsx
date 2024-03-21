import React from "react";
import { useState } from 'react'

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        wrongAnswer: "London",
        wrongAnswer2: "Rome",
        wrongAnswer3: "Denver"
    }, {
        question: "What color is the sky?",
        answer: "Blue",
        wrongAnswer: "Red",
        wrongAnswer2: "Green",
        wrongAnswer3: "Yellow"
    }, {
        question: "Who is Batman?",
        answer: "Bruce Wayne",
        wrongAnswer: "John",
        wrongAnswer2: "Joker",
        wrongAnswer3: "Pikachu"
    }, {
        question: "What is React a framework for?",
        answer: "JavaScript",
        wrongAnswer: "Python",
        wrongAnswer2: "Rust",
        wrongAnswer3: "C++"
    }
]

const Quiz = () => {
    let i = 0;
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [buttonOrder, setButtonOrder] = useState([1, 2, 3, 4].sort(() => Math.random() - 0.5));
    
    const questionNumber = quizQuestions.findIndex(obj => obj.answer === quizQuestions[index].answer) + 1;

    const handleClick = (e) => {
        console.log(e.target.value, index, count);
        setButtonOrder(buttonOrder.sort(() => Math.random() - 0.5))
        console.log(buttonOrder);
        
        setIndex((index) => ++index);
        if (index === quizQuestions.length - 1) {
            setIndex((index) => index = 0);
        }
        
        return e.target.value === quizQuestions[index].answer && setCount((count) => ++count);
    };

    if (index === quizQuestions.length) {
        setIndex((index) => index = 0);
    }

    let wonGame = false;

    if (count === (quizQuestions.length) && !wonGame) {
        console.log(wonGame);
        alert("Congratulations! You got all questions correctly!");
        wonGame = true;
        console.log(wonGame);
    }
    
    const CorrectAnswer = () => (<button type="button" onClick={handleClick} value={quizQuestions[index].answer}>{quizQuestions[index].answer}</button>);
    const WrongAnswer1 = () => (<button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer}>{quizQuestions[index].wrongAnswer}</button>);
    const WrongAnswer2 = () => (<button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer2}>{quizQuestions[index].wrongAnswer2}</button>);
    const WrongAnswer3 = () => (<button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer3}>{quizQuestions[index].wrongAnswer3}</button>);
    return (
    <div>
        <h3>Question {questionNumber}. {quizQuestions[index].question}</h3>
        {buttonOrder[0] === 1 ? <CorrectAnswer /> : buttonOrder[0] === 2 ? <WrongAnswer1 /> : buttonOrder[0] === 3 ? <WrongAnswer2 /> : <WrongAnswer3 />}
        {buttonOrder[1] === 1 ? <CorrectAnswer /> : buttonOrder[1] === 2 ? <WrongAnswer1 /> : buttonOrder[1] === 3 ? <WrongAnswer2 /> : <WrongAnswer3 />}<br/>
        {buttonOrder[2] === 1 ? <CorrectAnswer /> : buttonOrder[2] === 2 ? <WrongAnswer1 /> : buttonOrder[2] === 3 ? <WrongAnswer2 /> : <WrongAnswer3 />}
        {buttonOrder[3] === 1 ? <CorrectAnswer /> : buttonOrder[3] === 2 ? <WrongAnswer1 /> : buttonOrder[3] === 3 ? <WrongAnswer2 /> : <WrongAnswer3 />}
        <p>Score: {count}</p>
    </div>)
}

export default Quiz;
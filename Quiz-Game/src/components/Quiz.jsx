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
    }
]

const Quiz = () => {
    let i = 0;
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const questionNumber = quizQuestions.findIndex(obj => obj.answer === quizQuestions[index].answer) + 1;
    const handleClick = (e) => {
        console.log(e.target.value, index, count);
        setIndex((index) => ++index);
        if (index === quizQuestions.length - 1) {
            setIndex((index) => index = 0);
        }

        if (count === quizQuestions.length) {
            alert("Congratulations! You got all questions correctly!");
        }
        
        return e.target.value === quizQuestions[index].answer && setCount((count) => ++count)
    };
    
    return (
    <div>
        <h3>Question {questionNumber}. {quizQuestions[i].question}</h3>
        <button type="button" onClick={handleClick} value={quizQuestions[index].answer}>{quizQuestions[index].answer}</button>
        <button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer}>{quizQuestions[index].wrongAnswer}</button><br/>
        <button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer2}>{quizQuestions[index].wrongAnswer2}</button>
        <button type="button" onClick={handleClick} value={quizQuestions[index].wrongAnswer3}>{quizQuestions[index].wrongAnswer3}</button>
        <p>Score: {count}</p>
    </div>)
}

export default Quiz;
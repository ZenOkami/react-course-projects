import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import React, { useState, useEffect } from 'react';
import NumberSelector from "./NumberSelector";
import './App.css';

export const SudokuBoard = () => {
    const [puzzle, setPuzzle] = useState([]);
    const [solvedPuzzle, setSolvedPuzzle] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [difficulty, setDifficulty] = useState('easy');
    const [cellColors, setCellColors] = useState([]);
    const [inactiveCells, setInactiveCells] = useState([]); 
    const [isSolved, setIsSolved] = useState(false);
    const [numberStatus, setNumberStatus] = useState({});
    const [elapsedTime, setElapsedTime] = useState(0); // For the stopwatch
    const [timerRunning, setTimerRunning] = useState(false); // Stopwatch status
    const [mistakeCount, setMistakeCount] = useState(0); // Mistake counter
    const [showMistakeCounter, setShowMistakeCounter] = useState(false); // Toggle mistake counter display

    useEffect(() => {
        generatePuzzle();
    }, [difficulty]);

    useEffect(() => {
        if (isSolved) {
            triggerPuzzleCompleteAnimation();
        }
    }, [isSolved]);

    useEffect(() => {
        highlightSelectedNumber();
    }, [puzzle, selectedNumber]);

    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!timerRunning && elapsedTime !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    const generatePuzzle = () => {
        let newPuzzle, puzzleRating;
        const difficultyRanges = {
            easy: [0, 1.5],
            medium: [1.5, 3],
            hard: [3, 5]
        };
        const [minDifficulty, maxDifficulty] = difficultyRanges[difficulty];

        do {
            newPuzzle = makepuzzle();
            puzzleRating = ratepuzzle(newPuzzle, 4);
        } while (puzzleRating < minDifficulty || puzzleRating > maxDifficulty);

        const adjustedPuzzle = newPuzzle.map(value => value !== null ? value + 1 : '');
        setPuzzle(adjustedPuzzle);

        const solution = solvepuzzle(newPuzzle);
        if (solution) {
            const adjustedSolution = solution.map(value => value + 1);
            setSolvedPuzzle(adjustedSolution);
            setCellColors(new Array(81).fill(''));
            const newInactiveCells = adjustedPuzzle.map((cell, index) => cell !== '' ? index : null).filter(index => index !== null);
            setInactiveCells(newInactiveCells);
        } else {
            console.error('Failed to generate a valid solution for the puzzle');
            setSolvedPuzzle(null);
        }
        setIsSolved(false);
        setNumberStatus({});
        setElapsedTime(0); // Reset stopwatch
        setTimerRunning(false); // Pause stopwatch
        setMistakeCount(0); // Reset mistake counter
        setShowMistakeCounter(false); // Hide mistake counter
    };

    const checkIfSolved = (currentPuzzle) => {
        for (let i = 0; i < 81; i++) {
            if (currentPuzzle[i] !== solvedPuzzle[i]) {
                return false;
            }
        }
        return true;
    };

    const handleCellClick = (index) => {
        if (inactiveCells.includes(index)) {
            return;
        }

        if (selectedNumber !== null) {
            const newPuzzle = [...puzzle];
            newPuzzle[index] = selectedNumber;
            setPuzzle(newPuzzle);
            updateNumberStatus(newPuzzle, selectedNumber);

            const newCellColors = [...cellColors];
            if (selectedNumber === solvedPuzzle[index]) {
                newCellColors[index] = 'correct';
                setInactiveCells([...inactiveCells, index]);
            } else {
                newCellColors[index] = 'incorrect';
                setMistakeCount(prevCount => prevCount + 1); // Increment mistake counter
            }
            setCellColors(newCellColors);

            if (checkIfSolved(newPuzzle)) {
                setIsSolved(true);
            }
        }
    };

    const updateNumberStatus = (currentPuzzle, number) => {
        const countInPuzzle = currentPuzzle.reduce((count, cell, index) => {
            return cell === number && cell === solvedPuzzle[index] ? count + 1 : count;
        }, 0);

        const countInSolution = solvedPuzzle.filter(cell => cell === number).length;

        if (countInPuzzle === countInSolution) {
            setNumberStatus(prevStatus => ({
                ...prevStatus,
                [number]: 'complete'
            }));
        } else {
            setNumberStatus(prevStatus => ({
                ...prevStatus,
                [number]: 'incomplete'
            }));
        }
    };

    const handleSolve = () => {
        if (solvedPuzzle) {
            setPuzzle(solvedPuzzle.map(value => value === null ? '' : value));
            setCellColors(new Array(81).fill(''));
            setInactiveCells([...Array(81).keys()]); 
            setIsSolved(true);
        } else {
            console.error('No solution available for the current puzzle');
        }
    };

    const handleRefresh = () => {
        generatePuzzle();
    };

    const triggerPuzzleCompleteAnimation = () => {
        const container = document.querySelector('.sudoku-container');
        if (!container) return;

        const wipe = document.createElement('div');
        wipe.className = 'wipe';
        container.appendChild(wipe);

        const sparklesContainer = document.createElement('div');
        sparklesContainer.className = 'sparkles';
        container.appendChild(sparklesContainer);

        for (let i = 1; i <= 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = `sparkle sparkle-${i}`;
            sparkle.textContent = '✨';
            sparklesContainer.appendChild(sparkle);
        }

        setTimeout(() => {
            wipe.remove();
            sparklesContainer.remove();
        }, 10000);
    };

    const handleNumberSelect = (number) => {
        setSelectedNumber(number);
        highlightSelectedNumber(number);
    };

    const highlightSelectedNumber = (number = selectedNumber) => {
        const newCellColors = puzzle.map((cell, index) => {
            let backgroundColor = '';
            let textColor = '';

            if (cell === number) {
                backgroundColor = 'yellow';
            }

            if (cell !== '' && cell !== solvedPuzzle[index]) {
                textColor = 'red';
            }

            return { backgroundColor, textColor };
        });
        setCellColors(newCellColors);
    };

    const toggleStopwatch = () => {
        setTimerRunning(!timerRunning);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
            <div className="sudoku-container">
        {/* Timer and Difficulty Selector Side by Side */}
        <div className="top-controls">
            <div className="difficulty-selector">
                <label>Select Difficulty: </label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className="stopwatch">
                <button onClick={toggleStopwatch}>{timerRunning ? 'Pause' : 'Start'}</button>
                <span>{formatTime(elapsedTime)}</span>
            </div>
        </div>

        <NumberSelector 
            onSelectNumber={handleNumberSelect} 
            selectedNumber={selectedNumber} 
            numberStatus={numberStatus}
        />

        <div className="sudoku-board">
            {puzzle.map((cell, index) => (
                <div 
                    key={index} 
                    className="sudoku-cell"
                    style={{ 
                        backgroundColor: cellColors[index]?.backgroundColor, 
                        color: cellColors[index]?.textColor || 'black',
                        pointerEvents: inactiveCells.includes(index) ? 'none' : 'auto' 
                    }}
                    onClick={() => handleCellClick(index)}
                >
                    {cell !== '' ? cell : null}
                </div>
            ))}
        </div>

        {/* Solve and Refresh Buttons Side by Side */}
        <div className="button-container">
            <button onClick={handleSolve}>Solve Puzzle</button>
            <button onClick={handleRefresh}>{isSolved ? 'Start New Puzzle' : 'Refresh'}</button>
        </div>

        {/* Mistake Counter Below Buttons */}
        <div className="mistake-counter">
            <button onClick={() => setShowMistakeCounter(!showMistakeCounter)}>
                {showMistakeCounter ? 'Hide Mistake Counter' : 'Show Mistake Counter'}
            </button>
            {showMistakeCounter && <span>Mistakes: {mistakeCount}</span>}
        </div>
    </div>
    );
};

export default SudokuBoard;
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
    const [isSolved, setIsSolved] = useState(false);
    const [numberStatus, setNumberStatus] = useState({});

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
        } else {
            console.error('Failed to generate a valid solution for the puzzle');
            setSolvedPuzzle(null);
        }
        setIsSolved(false);
        setNumberStatus({});
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
        if (selectedNumber !== null) {
            const newPuzzle = [...puzzle];
            newPuzzle[index] = selectedNumber;
            setPuzzle(newPuzzle);
    
            // Update the status of the selected number
            updateNumberStatus(newPuzzle, selectedNumber);
    
            // Update cell colors based on correctness
            const newCellColors = [...cellColors];
            if (selectedNumber === solvedPuzzle[index]) {
                newCellColors[index] = 'correct';  // Correct number
            } else {
                newCellColors[index] = 'incorrect';  // Incorrect number
            }
            setCellColors(newCellColors);
    
            // Check if the puzzle is solved
            if (checkIfSolved(newPuzzle)) {
                setIsSolved(true);
            }
        }
    };
    

    const updateNumberStatus = (currentPuzzle, number) => {
        // Count occurrences of the number in the current puzzle
        const countInPuzzle = currentPuzzle.reduce((count, cell, index) => {
            return cell === number && cell === solvedPuzzle[index] ? count + 1 : count;
        }, 0);
    
        // Count how many of that number should be in the solution
        const countInSolution = solvedPuzzle.filter(cell => cell === number).length;
    
        // If all occurrences of the number in the current puzzle match the solution, mark it as 'complete'
        if (countInPuzzle === countInSolution) {
            setNumberStatus(prevStatus => ({
                ...prevStatus,
                [number]: 'complete'
            }));
        } else {
            // Otherwise, mark it as 'incomplete'
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

            // Highlight the selected number with yellow background
            if (cell === number) {
                backgroundColor = 'yellow';
            }

            // Incorrect number should have red text
            if (cell !== '' && cell !== solvedPuzzle[index]) {
                textColor = 'red';
            }

            return { backgroundColor, textColor };
        });
        setCellColors(newCellColors);
    };

    return (
        <div className="sudoku-container">
            <div className="difficulty-selector">
                <label>Select Difficulty: </label>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
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
                            color: cellColors[index]?.textColor || 'black' 
                        }}
                        onClick={() => handleCellClick(index)}
                    >
                        {cell !== '' ? cell : null}
                    </div>
                ))}
            </div>
            <button onClick={handleSolve}>Solve Puzzle</button>
            <button onClick={handleRefresh}>{isSolved ? 'Start New Puzzle' : 'Refresh'}</button>
        </div>
    );
};

export default SudokuBoard;

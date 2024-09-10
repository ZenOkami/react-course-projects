import { makepuzzle, solvepuzzle } from "sudoku";
import React, { useState, useEffect } from 'react';
import NumberSelector from "./NumberSelector";
import './App.css';

export const SudokuBoard = () => {
    const [puzzle, setPuzzle] = useState([]);
    const [solvedPuzzle, setSolvedPuzzle] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [difficulty, setDifficulty] = useState('easy');
    const [cellColors, setCellColors] = useState([]);
    const [isSolved, setIsSolved] = useState(false); // New state for animation

    useEffect(() => {
        generatePuzzle();
    }, [difficulty]);

    useEffect(() => {
        if (isSolved) {
            triggerPuzzleCompleteAnimation();
        }
    }, [isSolved]);

    const generatePuzzle = () => {
        const newPuzzle = makepuzzle();
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
        setIsSolved(false); // Reset solved state
    };

    const handleCellClick = (index) => {
        if (selectedNumber !== null) {
            const newPuzzle = [...puzzle];
            newPuzzle[index] = selectedNumber;
            setPuzzle(newPuzzle);

            const newCellColors = [...cellColors];
            if (selectedNumber === solvedPuzzle[index]) {
                newCellColors[index] = '';
            } else {
                newCellColors[index] = 'red';
            }
            setCellColors(newCellColors);
        }
    };

    const handleSolve = () => {
        if (solvedPuzzle) {
            setPuzzle(solvedPuzzle.map(value => value === null ? '' : value));
            setCellColors(new Array(81).fill(''));
            setIsSolved(true); // Trigger the solved animation
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
            sparkle.textContent = '✨'; // Use the sparkle symbol
            sparklesContainer.appendChild(sparkle);
        }

        setTimeout(() => {
            wipe.remove();
            sparklesContainer.remove();
        }, 5000); // Remove elements after 5 seconds
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
            <NumberSelector onSelectNumber={setSelectedNumber} selectedNumber={selectedNumber} />
            <div className="sudoku-board">
                {puzzle.map((cell, index) => (
                    <div 
                        key={index} 
                        className="sudoku-cell"
                        style={{ color: cellColors[index] }}
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

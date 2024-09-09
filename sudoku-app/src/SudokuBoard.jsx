import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import React, { useState, useEffect } from 'react';
import Cell from "./Cell";
import NumberSelector from "./NumberSelector";
import sudoku from 'sudoku';
import './App.css'

export const SudokuBoard = () => {
    const [puzzle, setPuzzle] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState(null);
  
    useEffect(() => {
      const newPuzzle = sudoku.makepuzzle().map(value => value === null ? '' : value);
      setPuzzle(newPuzzle);
    }, []);
  
    const handleCellClick = (index) => {
      if (selectedNumber !== null) {
        const newPuzzle = [...puzzle];
        newPuzzle[index] = selectedNumber;
        setPuzzle(newPuzzle);
      }
    };
  
    return (
      <div className="sudoku-container">
        <NumberSelector onSelectNumber={setSelectedNumber} />
        <div className="sudoku-board">
          {puzzle.map((cell, index) => (
            <div 
              key={index} 
              className="sudoku-cell"
              onClick={() => handleCellClick(index)}
            >
              {cell !== '' ? cell : null}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default SudokuBoard;

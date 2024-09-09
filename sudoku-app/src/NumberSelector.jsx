import { useState } from 'react'
import React from 'react'
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import './App.css'

export const NumberSelector = ({ onSelectNumber }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    return (
      <div className="number-selector">
        {numbers.map(number => (
          <button key={number} onClick={() => onSelectNumber(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  };
  
export default NumberSelector;
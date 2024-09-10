import { useState } from 'react'
import React from 'react'
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import './App.css'

export function DifficultySelector({ onDifficultyChange }) {
    return (
      <div className="difficulty-selector">
        <button onClick={() => onDifficultyChange('easy')}>Easy</button>
        <button onClick={() => onDifficultyChange('medium')}>Medium</button>
        <button onClick={() => onDifficultyChange('hard')}>Hard</button>
      </div>
    );
  }

export default DifficultySelector
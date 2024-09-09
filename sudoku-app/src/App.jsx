import { useState } from 'react'
import React from 'react'
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import ControlPanel from './ControlPanel';
import DifficultySelector from './DifficultySelector';
import NumberSelector from './NumberSelector';
import SudokuBoard from './SudokuBoard';
import './App.css'

export function App() {
  const [puzzle, setPuzzle] = React.useState(makepuzzle());
  const [selectedNumber, setSelectedNumber] = React.useState(null);
  const [difficulty, setDifficulty] = React.useState('easy');

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setPuzzle(generatePuzzle(newDifficulty));
  };

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handleCellChange = (rowIndex, cellIndex, value) => {
    // Update the puzzle with the new value
  };

  const handleSolve = () => {
    // Solve the puzzle using a solving algorithm
  };

  const handleRefresh = () => {
    setPuzzle(generatePuzzle(difficulty));
  };

  return (
    <div className="app">
      <SudokuBoard puzzle={puzzle} onCellChange={handleCellChange} />
      <DifficultySelector onDifficultyChange={handleDifficultyChange} />
      <NumberSelector onNumberSelect={handleNumberSelect} />
      <ControlPanel onRefresh={handleRefresh} onSolve={handleSolve} />
    </div>
  );
}

export default App
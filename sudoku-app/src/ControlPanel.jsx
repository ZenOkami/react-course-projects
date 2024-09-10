import { useState } from 'react'
import React from 'react'
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import './App.css'

export function ControlPanel({ onRefresh, onSolve }) {
    return (
      <div className="control-panel">
        <button onClick={onRefresh}>Refresh</button>
        <button onClick={onSolve}>Solve</button>
      </div>
    );
  }

export default ControlPanel
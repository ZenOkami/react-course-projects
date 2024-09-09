import { useState } from 'react'
import React from 'react'
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import './App.css'

export function Cell({ value, onChange }) {
    return (
      <input
        type="text"
        className="sudoku-cell"
        value={value}
        onChange={onChange}
        maxLength="1"
      />
    );
  }

export default Cell;
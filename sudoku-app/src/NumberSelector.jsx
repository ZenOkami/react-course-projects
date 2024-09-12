import React, { useState } from 'react';
import './App.css';

const NumberSelector = ({ onSelectNumber, selectedNumber, numberStatus }) => {
    const handleClick = (number) => {
        if (numberStatus[number] !== 'complete') {
            onSelectNumber(number);
        }
    };

    return (
        <div className="number-selector">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={`number-button ${selectedNumber === number ? 'selected' : ''}`}
                    style={{
                        backgroundColor: numberStatus[number] === 'complete' ? 'gold' : '',
                        pointerEvents: numberStatus[number] === 'complete' ? 'none' : 'auto',
                        opacity: numberStatus[number] === 'complete' ? 0.7 : 1
                    }}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};


export default NumberSelector;
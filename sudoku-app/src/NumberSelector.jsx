import React, { useState } from 'react';
import './App.css';

const NumberSelector = ({ onSelectNumber }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (number) => {
        setSelectedButton(number);
        onSelectNumber(number);
    };

    return (
        <div className="number-selector">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={`number-button ${selectedButton === number ? 'selected' : ''}`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default NumberSelector;

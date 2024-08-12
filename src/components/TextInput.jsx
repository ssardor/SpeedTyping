
import React from 'react';

const TextInput = ({ userInput, setUserInput, handleStart }) => {
  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      className="w-1/3 p-2 text-xl border-b-2 border-gray-300 focus:outline-none"
      placeholder="Нажмите на меня что бы печатать..."
      onFocus={handleStart}
    />
  );
};

export default TextInput;

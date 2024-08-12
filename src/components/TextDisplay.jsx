import React from 'react';

const TextDisplay = ({ text, userInput }) => {
  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';

      if (index < userInput.length) {
        className = char === userInput[index] ? 'text-green-500' : 'text-red-500';
      }

      //  трекер на текущий символ
      if (index === userInput.length) {
        return (
          <span key={index} className="relative">
            <span className={className}>{char}</span>
            <span className="absolute left-0 -bottom-1 h-7 w-1 bg-blue-500 animate-blink"></span>
          </span>
        );
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return <div className="mb-20 text-2xl w-4/5 ">{renderText()}</div>;
};

export default TextDisplay;

import React, { useState, useEffect } from 'react';
import TextDisplay from './TextDisplay';
import TextInput from './TextInput';
import useTypingSpeed from '../hooks/useTypingSpeed';

const TypingTest = ({ onRestart }) => {
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sit quam ut ad, vitae, laboriosam adipisci libero repellat sunt assumenda expedita!";

  useEffect(() => {
    let interval = null;

    if (startTime && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsFinished(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [startTime, timeLeft]);

  const handleInputChange = (value) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setUserInput(value);
  };

  const { wpm, errors } = useTypingSpeed(text, userInput, startTime, setIsFinished);

  return (
    <div className="flex flex-col items-center pb-10 justify-center min-h-screen bg-gray-900 text-white p-4">
      {!isFinished ? (
        <>
          <p className="mb-20 text-2xl text-yellow-500">Оставшееся время: {timeLeft} секунд</p>
          <TextDisplay text={text} userInput={userInput} />
          <TextInput userInput={userInput} setUserInput={handleInputChange} />
        </>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white text-gray-900 p-8 rounded">
            <p className="text-3xl font-bold mb-4">Результаты</p>
            <p className="mb-2">Скорость печати: {wpm} WPM</p>
            <p className="mb-4">Ошибки: {errors}</p>
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
              onClick={() => onRestart()}
            >
              Попробовать снова
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingTest;

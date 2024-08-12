import { useState, useEffect } from 'react';

const useTypingSpeed = (text, userInput, startTime, setIsFinished) => {
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (startTime && userInput.length > 0) {
      const elapsedMinutes = (Date.now() - startTime) / 60000;
      const wordsTyped = userInput.trim().split(' ').length;
      setWpm(Math.round(wordsTyped / elapsedMinutes));

      let errorCount = 0;
      text.split('').forEach((char, index) => {
        if (userInput[index] && userInput[index] !== char) {
          errorCount += 1;
        }
      });
      setErrors(errorCount);

      if (userInput.length === text.length) {
        setIsFinished(true);
      }
    }
  }, [userInput, startTime, text, setIsFinished]);

  return { wpm, errors };
};

export default useTypingSpeed;

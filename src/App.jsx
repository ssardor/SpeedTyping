import React, { useState } from 'react';
import TypingTest from './components/TypingTest';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleRestart = () => {
    setHasStarted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {!hasStarted ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Typing Speed Trainer</h1>
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-xl"
            onClick={() => setHasStarted(true)}
          >
            Начать
          </button>
        </div>
      ) : (
        <TypingTest onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;

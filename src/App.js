import React, { useState } from "react";
import TypingBox from "./components/TypingBox";
import NextKey from "./components/NextKey";
import Stats from "./components/Stats";
import Keyboard from "./components/Keyboard";
import Timer from "./components/Timer";

const App = () => {
  const [keysPressed, setKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [nextKey, setNextKey] = useState("a");
  const [isPracticeActive, setIsPracticeActive] = useState(false);

  const handleKeyPress = (e) => {
    if (!isPracticeActive) {
      setIsPracticeActive(true);
    }

    setKeysPressed(keysPressed + 1);

    const enteredKey = e.key.toLowerCase();
    if (enteredKey === nextKey) {
      setNextKey(String.fromCharCode(nextKey.charCodeAt(0) + 1));
    } else {
      setAccuracy(((keysPressed / (keysPressed + 1)) * 100).toFixed(2));
    }
  };

  const handleTimerComplete = () => {
    setIsPracticeActive(false);
  };

  return (
    <div className="App">
      <h1>Touch Typing Practice</h1>
      <NextKey nextKey={nextKey} />
      <TypingBox handleKeyPress={handleKeyPress} />
      <Stats keysPressed={keysPressed} accuracy={accuracy} />
      <Keyboard />
      {isPracticeActive && <Timer handleTimerComplete={handleTimerComplete} />}
    </div>
  );
};

export default App;

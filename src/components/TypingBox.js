import React, { useState } from "react";

const TypingBox = ({ handleKeyPress }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea
      className="typing-box"
      value={text}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="Start typing..."
    />
  );
};

export default TypingBox;

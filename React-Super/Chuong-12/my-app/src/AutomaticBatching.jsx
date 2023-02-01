import React, { useState } from "react";

function AutomaticBatching() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setCount(1);
    setFlag(true);
  };
  setTimeout(() => {
    setCount(1);
    setFlag(true);
  }, 1000);
  console.log(count, flag);
  return (
    <>
      <span>Count:{count}</span>
      <span>flag:{flag}</span>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default AutomaticBatching;

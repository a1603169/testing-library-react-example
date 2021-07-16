import React, { useEffect } from "react";

const BUTTON_TEXT = {
  NORMAL: "Button is not changed",
  CLICKED: "Button is changed",
};

export default function Button() {
  const [message, setMessage] = React.useState("Button is not changed");
  const timer = React.useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        button
      </button>
      <p>{message}</p>
    </div>
  );

  function click() {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMAL);
    }, 5000);
  }
}

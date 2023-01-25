import { useState, useEffect } from "react";

import "./index.css";

const App = () => {
  // state
  const [x, setX] = useState("left");
  const [y, setY] = useState("top");

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "ArrowUp") {
        setY("top");
      }
      if (e.key === "ArrowDown") {
        setY("bottom");
      }
      if (e.key === "ArrowLeft") {
        setX("left");
      }
      if (e.key === "ArrowRight") {
        setX("right");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // before unmount this gets run
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div className={`square ${x} ${y}`}></div>;
}

export default App

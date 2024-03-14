import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "animate.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const textRef = useRef();

  const handleAnimation = () => {
    console.log(textRef.current);
    textRef.current.classList.add("animate__animated");
    textRef.current.classList.add("lg:animate__swing");

    setTimeout(() => {
      textRef.current.classList.remove("animate__animated");
      textRef.current.classList.remove("lg:animate__swing");
    }, 1000);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 ref={textRef}>Vite + React</h1>
      <div className="card">
        <button
          className="animate__animated hover:animate__wobble"
          onClick={() => {
            setCount((count) => count + 1);
            handleAnimation();
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import { useState } from "react";
import React from "react";
function App() {
  const [obj, setObj] = useState({
    userName: "",
    clickCount: 0,
  });

  let inputName = "";

  const [flashBtn, setFlashBtn] = useState(null);

  const triggerFlash = (btnKey) => {
    setFlashBtn(btnKey);
    setTimeout(() => {
      setFlashBtn(null);
    }, 300);
  };

  const increaseHandle = () => {
    setObj((pre) => ({ ...pre, clickCount: pre.clickCount + 1 }));
    triggerFlash('inc');
  };

  const decreaseHandle = () => {
    if (obj.clickCount === 0) {
      alert("Click count must be larger than 0!");
      return;
    }
    setObj((pre) => ({ ...pre, clickCount: pre.clickCount - 1 }));
    triggerFlash('dec');
  };

  const nameChange = (e) => {
    setObj((pre) => ({ ...pre, userName: e.target.value.trim() }));
  };

  return (
    <>
      <input type="text" placeholder="Input name..." onChange={nameChange} />
      <button
        id="increase-count"
        onClick={increaseHandle}
        className={flashBtn === 'inc' ? "flash" : ""}
      >
        Increase Count
      </button>
      <button
        id="decrease-count"
        onClick={decreaseHandle}
        className={flashBtn === 'dec' ? "flash" : ""}
      >
        Decrease Count
      </button>
      <Main para={obj} />
    </>
  );
}

export default App;

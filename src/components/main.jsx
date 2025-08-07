import React from "react";
import "./mainCss/style.css";
function Main({ para }) {
  return (
    <main>
      <p>
        User's name: <b>{para.userName}</b>
      </p>
      <p>Count state: <b>{para.clickCount}</b></p>
    </main>
  );
}

export default Main;

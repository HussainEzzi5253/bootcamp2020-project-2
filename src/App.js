import React, { useState } from "react";
import "./styles.css";
import Button from "./Button";

export default function App() {
  let [isNahar, setNahar] = useState(false);

  return (
    <div className={isNahar ? "nahar" : "lail"}>
      <h1> يطيب لك هذا : {isNahar ? "النهار" : "الليل"} </h1>

      <button onClick={() => setNahar(!isNahar)}> حول الوقت</button>
    </div>
  );
}

import React, { useState } from "react";

function Button() {
  return (
    <div>
      <button onClick={() => setNahar(!isNahar)}> حول الوقت</button>
    </div>
  );
}
export default Button;

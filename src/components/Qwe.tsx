"use client";

import { useState } from "react";

export function Qwe() {
  const [isFlag, setIsFlag] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsFlag((prevIsFlag) => !prevIsFlag);
        }}
      >
        qwe {isFlag ? 0 : 1}
      </button>
      {isFlag ? <div>ewq</div> : null}
    </div>
  );
}

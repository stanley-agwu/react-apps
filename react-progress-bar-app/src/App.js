import React, { useState, useEffect } from "react";

import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;

        newValue === 100 && clearInterval(interval);

        return newValue;
      });
    }, 1000);
  }, []);
  return (
    <ProgressBar color={"#F87575"} width={"350px"} value={value} max={100} />
  );
}
export default App;

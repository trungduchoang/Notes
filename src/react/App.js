// libs
import { useState } from "react";
import { channels } from "../shared/constants";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <h1
      onClick={() => {
        setCount((currentCount) => (currentCount += 1));
      }}
    >
      Hello World! {count}
    </h1>
  );
};

export default App;

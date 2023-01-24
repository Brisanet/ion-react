import { useState } from "react";
import { Button } from "./lib/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button>Button</Button>
    </div>
  );
}

export default App;

import { useState } from "react";
// import { HomePage } from "./Components/HomePage";
// import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <AllRoutes/>
  </div>;
}

export default App;

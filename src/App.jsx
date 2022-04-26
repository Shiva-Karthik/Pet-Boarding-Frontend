import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { ShowEntity } from "./Components/ShowEntity ";
import { AllRoutes } from "./Routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <Navbar/>
  <ShowEntity/>
    {/* <AllRoutes/> */}
  </div>;
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;

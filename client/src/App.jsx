import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import RemoteJob from "./Components/RemoteJob";
import Details from "./Components/Details";

function App() {
  return (
    <div className="h-full min-h-screen py-3 w-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />

        <Route path="/remote" element={<RemoteJob />} />
        <Route path="/job/:slug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

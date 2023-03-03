// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Lists from "./components/Lists/Lists";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="?:search" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;

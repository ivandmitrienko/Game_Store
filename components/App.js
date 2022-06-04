import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import { Strategy } from "./pages/Strategy.jsx";
import { Action } from "./pages/Action.jsx";
import { Fantasy } from "./pages/Fantasy.jsx";

function App() {
  return (
    <div className="App">
      <header>
        <span>Game Store</span>
        <a href="/">Home</a>
        <a href="/action">Action</a>
        <a href="/strategy">Strategy</a>
        <a href="/fantasy">Fantasy</a>
      </header>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/strategy" element={ <Strategy /> } />
        <Route path="/action" element={ <Action /> } />
        <Route path="*" element={ <Fantasy /> } />
      </Routes>
    </div>
  )
}

export default App
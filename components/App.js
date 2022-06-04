import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import { Strategy } from "./pages/Strategy.jsx";
import { Action } from "./pages/Action.jsx";
import { Fantasy } from "./pages/Fantasy.jsx";

import { Layout } from "./Layout.jsx";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Homepage /> } />
          <Route path="strategy" element={ <Strategy /> } />
          <Route path="action" element={ <Action /> } />
          <Route path="fantasy" element={ <Fantasy /> } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
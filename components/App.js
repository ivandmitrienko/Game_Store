import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Homepage } from "./pages/Homepage.jsx";
import { Strategy } from "./pages/Strategy.jsx";
import { Action } from "./pages/Action.jsx";
import { Fantasy } from "./pages/Fantasy.jsx";
import { Singlepage } from "./pages/Singlepage.jsx";
import { Gamepage } from "./pages/Gamepage/Gamepage.jsx";
import { OrderPage } from './pages/Gamepage/orderPage/orderPage.jsx';
import { Layout } from "./Layout.jsx";
import { store } from "./Redux/index.js";

function App() {
  return (
    <div className="App"> 
      <Provider store = {store}>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Homepage /> } />
            <Route path="game/:id" element={ <Gamepage /> } />
            <Route path="action" element={ <Action /> } />
            <Route path="action/:id" element={ <Singlepage /> } />
            <Route path="strategy" element={ <Strategy /> } />
            <Route path="fantasy" element={ <Fantasy /> } />
            <Route path="/order" element={ <OrderPage /> } />
          </Route>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
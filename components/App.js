import { Routes, Route, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import { Homepage } from "./pages/Homepage.jsx";
import { Gamepage } from "./pages/Gamepage/Gamepage.jsx";
import { OrderPage } from './pages/Gamepage/orderPage/orderPage.jsx';
import { Layout } from "./Layout.jsx";
import { store } from "./Redux/index.js";
import { Category } from "./pages/Category.jsx";

function App() {

  return (
    <div className="App"> 
      <Provider store = {store}>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Homepage /> } />
            <Route path="game/:id" element={ <Gamepage /> } />
            <Route path="/order" element={ <OrderPage /> } />
            <Route path="category/:genres" element={ <Category /> } />
          </Route>     
        </Routes>
      </Provider>
    </div>
  )
}

export default App
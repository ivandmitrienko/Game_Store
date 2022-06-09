import { Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Homepage } from "./pages/Homepage.jsx";
import { Gamepage } from "./pages/Gamepage/Gamepage.jsx";
import { OrderPage } from './pages/Gamepage/orderPage/orderPage.jsx';
import { Layout } from "./Layout.jsx";
import { store, persistor } from "./Redux/index.js";
import { Category } from "./pages/Category.jsx";

function App() {

  return (
    <div className="App"> 
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={ <Layout /> }>
              <Route index element={ <Homepage /> } />
              <Route path="game/:id" element={ <Gamepage /> } />
              <Route path="/order" element={ <OrderPage /> } />
              <Route path="category/:genres" element={ <Category /> } />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
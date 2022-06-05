import { NavLink, Outlet } from "react-router-dom";
import { Basket } from "./Basket/Basket.jsx";

const setActive = ({isActive}) => ({color:isActive ? 'var(--color-active)': 'white'});

const Layout = () => {
    
    return (
        <div>
            <header>
                <span>Game Store</span>
                <NavLink to="/" style={setActive} >Home</NavLink>
                <NavLink to="/action" style={setActive}>Action</NavLink>
                <NavLink to="/strategy" style={setActive}>Strategy</NavLink>
                <NavLink to="/fantasy" style={setActive}>Fantasy</NavLink>
                <div className="basket">
                    <Basket />
                </div>
            </header>
            <main className="container">
              <Outlet />
            </main>
            
            <footer className="container">1212</footer>
        </div>  
    )
}

export {Layout};
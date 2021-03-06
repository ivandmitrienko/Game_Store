import { NavLink, Outlet } from "react-router-dom";
import { Basket } from "./Basket/Basket.jsx";
import "./Layout.css";

const setActive = ({isActive}) => ({color:isActive ? 'var(--color-active)': 'white'});

const Layout = () => {
    
    return (
        <div>
            <header>
                <span>Game Store</span>
                <NavLink to="/" style={setActive} >Home</NavLink>
                <NavLink to="/category/Action" style={setActive}>Action</NavLink>
                <NavLink to="/category/Strategy" style={setActive}>Strategy</NavLink>
                <NavLink to="/category/Fantasy" style={setActive}>Fantasy</NavLink>
                <div className="basket">
                    <Basket />
                </div>
            </header>
            <main className="container">
              <Outlet />
            </main>
            
            <footer>What Would You Choose?</footer>
        </div>  
    )
}

export {Layout};
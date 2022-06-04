import { Outlet } from "react-router-dom";
import { CostumLink } from './CostumLink.jsx';

// const setActive = ({isActive}) => ({color:isActive ? 'var(--color-active)': 'white'});

const Layout = () => {
    
    return (
        <div>
            <header>
                <span>Game Store</span>
                <CostumLink to="/" >Home</CostumLink>
                <CostumLink to="/action" >Action</CostumLink>
                <CostumLink to="/strategy" >Strategy</CostumLink>
                <CostumLink to="/fantasy" >Fantasy</CostumLink>
            </header>
            <main className="container">
              <Outlet />
            </main>
            
            <footer className="container">1212</footer>
        </div>  
    )
}

export {Layout};
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    
    return (
        <div>
            <header>
                <span>Game Store</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/action">Action</NavLink>
                <NavLink to="/strategy">Strategy</NavLink>
                <NavLink to="/fantasy">Fantasy</NavLink>
            </header>
            <main className="container">
              <Outlet />
            </main>
            
            <footer className="container">1212</footer>
        </div>  
    )
}

export {Layout};
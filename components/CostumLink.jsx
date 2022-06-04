import { Link, useMatch } from "react-router-dom";

const CostumLink = ({children, to, ...props}) => {

    const match = useMatch(to);
    
    return (
        <div>
            <Link 
            to={to}
            style={{
                color: match ? 'var(--color-active)': 'white',
            }}
            {...props}>

                {children}
            
            </Link>
        </div>
    )
}

export {CostumLink};

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Route, Route2 } from './routes';

const SideNav = () => {
    const location = useLocation();
    const [menu] = useState(Route);
    const [menu2] = useState(Route2);

    return (
        <>
            <nav className="sidebar">
                <ul className="">
                    {menu.map((el, i) => {
                        return (
                            <li key={i} className={`${location.pathname === el.path ? "active" : ""}`}>{el.icon}&ensp;<Link to={el.path}>{el.name}</Link></li>
                        )
                    })}
                    <h4>SHARE</h4>
                    {menu2.map((el, i) => {
                        return (
                            <li key={i} className={`${location.pathname === el.path ? "active" : ""}`}>{el.icon}&ensp;<Link to={el.path}>{el.name}</Link></li>
                        )
                    })}

                </ul>
            </nav>
        </>
    );
}

export default SideNav;

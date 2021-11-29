import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdCube } from 'react-icons/io';
import { Route, Route2 } from './routes';

const SideNav = ({show}) => {
    const location = useLocation();
    const [menu] = useState(Route);
    const [menu2] = useState(Route2);

    return (
        <>
            <nav className={`sidebar ${ show ? 'expand' : ''}`}>
                <h5 className="text-primary mb-5"><IoMdCube className="rotate" />&nbsp;bluecube</h5>
                <ul className="">
                    {menu.map((el, i) => {
                        return (
                            <li key={i} className={`${location.pathname === el.path ? "active" : ""}`}>{el.icon}&ensp;<Link to={el.path}>{el.name}</Link></li>
                        )
                    })}
                    <small className="px-3">SHARE</small>
                    {menu2.map((el, i) => {
                        return (
                            <li key={i} className={`text-white ${location.pathname === el.path ? "active" : ""}`}>{el.icon}&ensp;<Link to={el.path}>{el.name}</Link></li>
                        )
                    })}

                </ul>
            </nav>
        </>
    );
}

export default SideNav;

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideNav from "./SideNav";
import Footer from "./Footer";

/**
 * @author traj3ctory
 * @function Layout
 **/

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div
                className="wrapper"
            >
                <SideNav show={isOpen} />
                <main className='content'>
                    <div className='container-fluid'>{children}</div>
                    <Footer />
                </main>
                <button className="btn btn-sm btn-primary toggle" onClick={handleToggle}><GiHamburgerMenu /></button>
                <div className={isOpen ? 'overlay' : ''} onClick={handleToggle}></div>
            </div>
        </>
    );
};

export default Layout;

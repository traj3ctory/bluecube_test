import SideNav from "./SideNav";
import Footer from "./Footer";

/**
 * @author traj3ctory
 * @function Layout
 **/

const Layout = ({ children }) => {
    return (
        <>
            <div
                className="wrapper"
            >
                <SideNav />
                <main className="content">
                    <div className='container-fluid'>{children}</div>
                    <Footer />
                </main>
            </div>
        </>
    );
};

export default Layout;

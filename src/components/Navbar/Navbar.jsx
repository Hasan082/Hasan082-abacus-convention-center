import Container from "../Container/Container";

const Navbar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
        <li><a>Subscribe</a></li>
    </>

    return (
        <div className="bg-gray-100">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <a href="" className="text-xl">Abacus Convention Center</a>
                    </div>

                    <div className="navbar-end">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                                {navItems}
                            </ul>
                        </div>
                        <ul className="menu menu-horizontal px-1 hidden lg:flex">
                            {navItems}
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Navbar;
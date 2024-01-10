import { NavLink } from "react-router-dom";



function Header() {
    return (
        <div className="header component">
            
            <nav className="header-nav"  >
            
                {/* <NavLink to="/"  className="logo nav-name">ShareNotes</NavLink> */}
                {/* <div className="">  */}
                <a href="/" className="logo nav-name">ShareNotes</a>
                <NavLink to="/" className="nav-name" >Home</NavLink>
                <NavLink to="/create" className="nav-name" >Create</NavLink>
                <NavLink to="/note" className="nav-name" >Note</NavLink>
                {/* </div> */}
                <NavLink to="/about" className="nav-name">About</NavLink>
            </nav>

        </div>
    );
}

export default Header;
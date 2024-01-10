import { NavLink } from "react-router-dom";



function Header() {
    return (
        <div className="header component">
            
            <nav className="header-nav"  >
                <a href="/" className="logo nav-name">ShareNotes</a>
                <NavLink to="/" className="nav-name" >Home</NavLink>
                <NavLink to="/create" className="nav-name" >Create</NavLink>
                <NavLink exact="true" to="/note" className="nav-name" >Note</NavLink>
                <NavLink to="/about" className="nav-name">About</NavLink>
            </nav>

        </div>
    );
}

export default Header;
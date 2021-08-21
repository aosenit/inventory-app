import "./Navbar.css"

function Navbar({logo, option}) {
    return (
        <div className ="navbar">
            <div className="navbar__logo">{logo}</div>
            <div className="navbar__option">{option}</div>
        </div>
    )
}

export default Navbar

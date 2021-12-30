
function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav__list">
                <p className="logo">InfoLab</p>
                <div className="flex">
                    <li className="nav__item uppercase"><a href="/">Home</a></li>
                    <li className="nav__item uppercase"><a href="/page">Page 2</a></li>
                </div>
                
            </ul>
        </nav>
    )
}

export default Navbar

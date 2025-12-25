import { Link } from "react-router-dom";
import './Navbar.scss';
import { useState } from "react";

export const NavbarComponent = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <nav className="row navbar navbar-expand-lg nav-background container-fluid p-0">
                <div className="container-class nav-flex-large">
                    <div className="toggle-flex grid-y-center">
                        <Link to="/" className="navbar-brand">
                            <div className="nav-text-logo">Surya<span>.</span>Dev</div>
                        </Link>
                        <div
                            className={`navbar-toggler p-0 ${isOpen ? "open" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={handleToggle}
                            style={{ height: "auto", border:"none" }}
                        >
                            <div className="line line1"></div>
                            <div className="line line2"></div>
                        </div>
                    </div>
                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent"
                        style={{ justifyContent: "center" }}
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-24">
                            <li className="nav-item">
                                <Link to="/" className="nav-link page-item first-page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="projects" className="nav-link page-item">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" className="nav-link page-item">
                                    About
                                </Link>
                            </li>
                            <form className="contact-btn-2 grid-y-center" role="search">
                                <Link to="contact">
                                    <div className="chat-icon">
                                        <i class="bi bi-chat-text"></i>
                                    </div>
                                </Link>
                            </form>
                        </ul>
                    </div>
                    <form className="contact-btn-1 grid-y-center" role="search">
                        <Link to="contact">
                            <div className="chat-icon">
                                <i class="bi bi-chat-text"></i>
                            </div>
                        </Link>
                    </form>
                </div>
            </nav>
        </header>
    )
}
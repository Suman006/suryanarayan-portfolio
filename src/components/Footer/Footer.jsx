import { Link } from "react-router-dom";
import "./footer.scss";

export const FooterComponent  = () => {
    return(
        <footer className="row container-fluid px-0 footer-section">
            <div className="container-class">
                <div className="d-grid gap-5">
                    <div>
                        <h2>Let’s Work Together</h2>
                        <div className="mt-16">
                            <p className="regular mb-0">Frontend Developer & UI Enthusiast. Building clean, performant,<br /> and user-friendly web applications.</p>
                        </div>
                        <Link to="/contact"><button className="primary-btn foot-btn mt-4">Start a Project <i className="bi bi-arrow-right"></i></button></Link>
                    </div>
                    <div className="d-grid gap-4">
                        <div>
                            <h5>Explore</h5>
                            <ul className="list-container">
                                <li className="foot-list">
                                    <Link to="/" className="foot-link">Home</Link>
                                </li>
                                <li className="foot-list">
                                    <Link to="about" className="foot-link">About</Link>
                                </li>
                                <li className="foot-list">
                                    <Link to="projects" className="foot-link">Projects</Link>
                                </li>
                                <li className="foot-list">
                                    <Link to="contact" className="foot-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Let's Connect</h5>
                            <ul className="list-container">
                                <li className="foot-list">
                                    <Link to="https://www.linkedin.com/in/suryanarayan-nahak-2a3aa5241/" target="_blank" className="foot-link"><i className="bi bi-linkedin foot-icon"></i>Linkedin</Link>
                                </li>
                                 <li className="foot-list">
                                    <Link className="foot-link"><i className="bi bi-github foot-icon"></i>Github</Link>
                                </li>
                                 <li className="foot-list">
                                    <Link className="foot-link" to="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram foot-icon"></i>Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                    <p className="regular mb-0">© 2025 Suryanarayan Nahak. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
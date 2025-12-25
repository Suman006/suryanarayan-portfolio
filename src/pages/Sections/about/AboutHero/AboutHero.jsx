import "./aboutHero.scss";
import Profile from "../../../../assets/images/profile-photo.png"
import { Link } from "react-router-dom";

export const AboutHero = () => {
    return (
        <div className="row container-fluid px-0 pt-100 pb-100 about-hero">
            <div className="container-class">
                <div className="d-grid-7-5 gap-40">
                    <div>
                        <div className="heading-pill mb-24">About Me</div>
                        <h1>Passionate Frontend<br /> Developer & UI Enthusiast</h1>
                        <div className="mt-16">
                            <p className="regular mb-0">I'm a frontend developer with a strong focus on creating pixel-perfect, user friendly and performant web applications. I love transforming complex problems into seamless engaging experiences.</p>
                        </div>
                        <Link to="/contact"><button className="primary-btn mt-30">Get In Touch <i className="bi bi-arrow-right"></i></button></Link>
                        <div className="mt-30">
                            <div className="d-flex align-items-center info-icon">
                                <i className="bi bi-geo-alt"></i>
                                <p className="regular mb-0">Hyderabad, India</p>
                            </div>
                            <div className="d-flex align-items-center info-icon mt-16">
                                <i class="bi bi-suitcase-lg"></i>
                                <p className="regular mb-0">Open to Opportunities</p>
                            </div>
                            <div className="d-flex align-items-center info-icon mt-16">
                                <i class="bi bi-code-slash"></i>
                                <p className="regular mb-0">Specializing in React & UI Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="container-width">
                            <img src={Profile} alt="" className="about-profile-img" />
                            <div className="d-flex justify-content-center gap-40 number-container">
                                <div className="right-divider">
                                    <h4 className="mb-0 text-center">3+</h4>
                                    <div>
                                        <p className="regular mb-0 text-center">Years of Experience</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-0 text-center">45+</h4>
                                    <div>
                                        <p className="regular mb-0 text-center">Completed Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
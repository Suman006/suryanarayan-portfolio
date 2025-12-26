import "./hero.scss";
import profile from "../../../../assets/images/profile-circle.png";
import { Link } from "react-router-dom";

export const Hero  = () => {
    return(
       <>
        <div className="row container-fluid px-0 pt-100 pb-100 hero-section">
            <div className="container-class">
                <div className="d-grid-7-5 gap-16">
                    <div className="grid-y-center">
                        <div>
                            <div className="heading-pill">Hey, I'm Surya 👋🏻</div>
                            <div className="mt-3">
                                <h1><span className="highlight">Designing</span> clean, scalable and modern web interfaces.</h1>
                            </div>
                            <p className="regular">I’m a frontend developer focused on building responsive, <br /> performance-driven web experiences using modern technologies.</p>
                            <div className="d-flex gap-16 mt-4">
                                <Link to="projects"><button className="primary-btn">View Projects</button></Link>
                                <Link to="contact"><button className="secondary-btn">Contact Me</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-img-container">
                        <img src={profile} className="hero-image " alt="" />
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
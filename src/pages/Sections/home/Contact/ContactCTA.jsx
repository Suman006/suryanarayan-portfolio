import { Link } from "react-router-dom"
import "./contactCTA.scss"

export const ContactCTA = ({backgroundVariant}) => {
    return(
        <div className={`row container-fluid px-0 pt-100 pb-100 contact-section ${backgroundVariant || ""}`}>
            <div className="container-class">
                <div className="grid-center">
                    <div>
                        <h2 className="text-center">Let’s create fast, scalable, and beautiful<br/> web experiences</h2>
                        <div className="mt-16">
                            <p className="regular text-center">I’m open to frontend roles, freelance projects, and meaningful collaborations. If you’re looking for a<br/> developer who values clean UI, performance, and scalable architecture, feel free to reach out.</p>
                        </div>
                        <Link to="/contact" className="mail-link"><button className="primary-btn mt-4 m-auto d-block" style={{fontWeight:"600", fontSize:"17px"}}><i className="bi bi-envelope-fill touch-icon"></i>Get In Touch</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
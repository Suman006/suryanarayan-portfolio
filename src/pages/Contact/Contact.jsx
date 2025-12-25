import "./contact.scss";
import emailIcon from "../../assets/images/email.png";
import callIcon from "../../assets/images/phone-call.png";
import pinterest from "../../assets/images/pinterest.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import { ContactForm } from "./ContactForm";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div className="row container-fluid px-0 pt-100 pb-100">
            <div className="container-class">
                <div className="d-grid gap-40 contact-details">
                    <div className="contact-info">
                        <div className="contact-left">
                            <h4>Get In Touch</h4>
                            <div className="mt-16">
                                <p className="regular">I am currently open to new opportunities and collaborations.<br /> Feel free to reach out, and i'll get back to you as soon as possible.</p>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-4 mt-30">
                                <div className="icon-layer">
                                    <img src={emailIcon} alt="" width="30px" />
                                </div>
                                <div>
                                    <p className="regular m-0">nahaksuryanarayan8@gmail.com</p>
                                    {/* <div className="mt-1">
                                        <p className="regular m-0">nahaksuryanarayan52@gmail.com</p>
                                    </div> */}
                                </div>
                            </div>
                             <div className="d-flex flex-wrap align-items-center gap-4 mt-30">
                                <div className="icon-layer">
                                    <img src={callIcon} alt="" width="30px" />
                                </div>
                                <div>
                                    <p className="regular m-0">+91 8249537544</p>
                                    {/* <div className="mt-1">
                                        <p className="regular m-0">+91 743690195</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-30">
                            <div className="d-flex gap-4 flex-wrap mt-16">
                                <div className="icon-layer border-rounded">
                                    <Link to="https://in.pinterest.com/nahaksuryanarayan8/" target="_blank"><img src={pinterest} alt="" width="30px" /></Link>
                                </div>
                                <div className="icon-layer">
                                    <Link to="https://www.linkedin.com/in/suryanarayan-nahak-2a3aa5241/" target="_blank"><img src={linkedin} alt="" width="30px" /></Link>
                                </div>
                                <div className="icon-layer">
                                    <Link to="https://www.instagram.com/" target="_blank"><img src={instagram} alt="" width="30px" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
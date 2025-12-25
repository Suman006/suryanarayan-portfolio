import "./aboutExperience.scss";
import organizationIcon from "../../../../assets/images/organization.png";
import { AboutExperienceTile } from "./AboutExperienceTile";

export const AboutExperience = () => {

    const experienceDetails  = [
        {
            id:1,
            image: organizationIcon,
            company:"Finbot",
            designation:"UI Developer",
            duration:"June 2023 - Present",
            points:[
                "Built and maintained production web applications and marketing sites, translating business needs into clean, consistent, user-ready interfaces.",
                "Created reusable React components and structured frontend systems focused on performance, maintainability, and long-term scalability.",
                "Collaborated with designers, backend teams, and stakeholders to deliver features end-to-end while improving usability and UI workflows."
            ]
        },
        {
            id:2,
            image: organizationIcon,
            company:"AOF Engineering System",
            designation:"Junior Developer",
            duration:"Nov 2022 - May 2024",
            points:[
                "Developed functional modules and dashboards using Laravel and frontend technologies aligned with real business requirements.",
                "Worked on React-based interfaces while strengthening API integration, backend communication, and real-world development practices."
            ]
        }
    ]

    return (
        <div className="row container-fluid px-0 pt-100 pb-100 secondary-bg exp-section">
            <div className="container-class">
                <div className="d-grid">
                    <div>
                        <h2 className="mb-0">My Experience</h2>
                        <div className="mt-16">
                            <p className="regular mb-0">Hands-on experience delivering production-ready web applications with a strong focus on clean UI, performance, and scalable frontend systems.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-2-col gap-40 mt-5">
                {
                    experienceDetails.map((expDetails)=>(
                        <AboutExperienceTile experiences={expDetails} key={expDetails.id} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}
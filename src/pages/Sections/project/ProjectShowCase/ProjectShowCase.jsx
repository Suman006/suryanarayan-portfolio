import architectureIcon from "../../../../assets/images/architecture.png";
import dashboardIcon from "../../../../assets/images/dashboard-design.png";
import performIcon from "../../../../assets/images/good-feedback.png";
import productionIcon from "../../../../assets/images/production.png";
import { ProjectShowcaseTile } from "./ProjectShowcaseTile";

export const ProjectShowCase  = () => {
    const projectShowcase = [
        {
            id:1,
            icon: architectureIcon,
            title:"Engineering-Driven UI Architecture",
            description:"Interfaces built with structure, consistency, and long-term maintainability in mind. Every project follows a clear layout system and component strategy, enabling scalable growth without UI debt."
        },
        {
            id:2,
            icon: dashboardIcon,
            title:"Business-Critical Dashboard Design",
            description:"Complex workflows and data transformed into intuitive, decision-focused interfaces. Designed dashboards that balance information density with clarity, ensuring usability for real operational users."
        },
        {
            id:3,
            icon: performIcon,
            title:"Performance-Oriented Frontend Execution",
            description:"Frontend implementations optimized for speed, responsiveness, and smooth interaction. Focused on efficient rendering, lightweight UI patterns, and seamless user experience across devices."
        },
        {
            id:4,
            icon: productionIcon,
            title:"Production-Ready Design Systems",
            description:"UI systems crafted for real teams, real users, and real scalability. Emphasis on reusable patterns, consistent styling, and clean handoffs for ongoing product development."
        },
    ]
    return(
        <div className="row container-fluid px-0 pt-100 pb-100 secondary-bg project-showcase-section">
            <div className="container-class ">
                <div>
                    <h2 className="text-center m-0">What These Projects Showcase</h2>
                    <div className="mt-16">
                        <p className="regular mb-0 text-center">A glimpse into my capabilities, focusing on building scalable, performant,<br /> and user-friendly web applications.</p>
                    </div>
                </div>
                <div className="grid-2-col gap-32 mt-5">
                    {
                        projectShowcase.map((projectShow)=> (
                            <ProjectShowcaseTile projectShowcase={projectShow} key={projectShow.id}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
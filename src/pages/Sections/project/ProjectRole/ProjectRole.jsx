import architectureIcon from  "../../../../assets/images/architecture.png";
import layoutIcon from "../../../../assets/images/responsive-page.png";
import optimizationIcon from "../../../../assets/images/good-feedback.png";
import { ProjectRoleTile } from "./ProjectRoleTile";

export const ProjectRole = () => {

    const rollDetails =[
        {
            id:1,
            icon: architectureIcon,
            title:"Scalable UI Architecture",
            description:"Designed component-driven frontend structures that scale with product growth, ensuring consistency, maintainability, and long-term UI stability across applications."
        },
        {
            id:2,
            icon: layoutIcon,
            title:"Responsive & Accessible Design",
            description:"Built interfaces that adapt seamlessly across devices while following accessibility best practices, delivering inclusive and reliable user experiences at scale."
        },
        {
            id:3,
            icon: optimizationIcon,
            title:"Performance-Focused Frontend",
            description:"Optimized frontend performance through efficient rendering, code splitting, and clean interaction patterns to ensure fast, smooth, production-ready interfaces."
        }
    ]

    return(
        <div className="row container-fluid px-0 pt-100 pb-100 secondary-background">
            <div className="container-class">
                <div>
                    <h2 className="text-center">My Role In These Projects</h2>
                <div className="mt-16">
                    <p className="regular text-center mb-0">I translate product requirements into clean, scalable frontend systems, collaborating closely with <br />design and backend teams to deliver production-ready interfaces.</p>
                </div>
                </div>
                <div className="grid-3-col gap-32 mt-5">
                    {
                        rollDetails.map((detail)=>(
                            <ProjectRoleTile details={detail} key={detail.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
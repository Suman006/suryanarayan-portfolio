import "./howIWork.scss";
import reqIcon from "../../../../assets/images/work-1.png"
import archIcon from "../../../../assets/images/work-2.png"
import buildIcon from "../../../../assets/images/work-3.png"
import testIcon from "../../../../assets/images/work-4.png"
import { WorkStep } from "./WorkStep";

export const HowIWork = ({backGround}) => {
    const Works  = [
        {
            id:1,
            step:"1",
            title:"Understand Requirements",
            description:"Analyzing business needs, user goals, and technical constraints before writing any code.",
            icon: reqIcon,
            withConnector:true
        },
        {
            id:2,
            step: "2",
            title: "Planning Architecture",
            description: "Designing component structure, state management, and scalable frontend architecture.",
            icon: archIcon,
            withConnector:true
        },
        {
            id:3,
            step:"3",
            title:"Building & Iterating",
            description:"Developing clean, reusable components with performance and accessibility in mind.",
            icon: buildIcon,
            withConnector:true
        },
        {
            id:4,
            step:"4",
            title:"Testing & Refinement",
            description:"Optimizing performance, fixing edge cases, and polishing UI interactions.",
            icon: testIcon,
            withConnector:false
        },
    ]
    return(
        <div className={`row container-fluid px-0 pt-100 pb-100 work-section ${backGround || ""}`}>
            <div className="container-class">
                <div className="grid-center">
                    <div>
                        <div className="heading-pill work-pill m-auto d-block">How I Work</div>
                        <div className="mt-16 mb-16">
                            <h2 className="text-center m-0">My Development Process</h2>
                        </div>
                        <p className="regular text-center mb-0">A streamlined approach to designing and building performant user<br /> interfaces with an emphasis on scalability and quality.</p>
                    </div>
                </div>
                <div className="grid-4-col gap-4 mt-5">
                    {
                        Works.map((work)=>(
                            <WorkStep WorkDetails={work}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import devIcon from "../../../../assets/images/coding.png";
import reactIcon from "../../../../assets/images/programing.png";
import performIcon from "../../../../assets/images/optimization.png";
import deviceIcon from "../../../../assets/images/responsive-page.png";
import { SkillCard } from "./SkillCard";

export const Skills = () => {

    const skillDetails = [
        {
            id:1,
            icon: devIcon,
            title:"UI Engineering",
            description: "I specialize in building clean, scalable user interfaces with a strong focus on structure, consistency, and visual clarity. My approach ensures designs translate into maintainable code that stays flexible as products evolve."
        },
        {
            id:1,
            icon: reactIcon,
            title:"React Development",
            description: "I develop modular, reusable React components using modern hooks, routing, and state management patterns. The focus is always on predictable behavior, clean architecture, and long-term scalability rather than quick fixes."
        },
        {
            id:1,
            icon: deviceIcon,
            title:"Responsive & Adaptive Design",
            description: "I design interfaces that adapt seamlessly across devices and screen sizes. Every layout is tested for real-world breakpoints to ensure usability, readability, and visual balance on mobile, tablet, and desktop."
        },
        {
            id:1,
            icon: performIcon,
            title:"Performance & Code Quality",
            description: "I prioritize performance, accessibility, and clean code practices from the start. Optimized rendering, thoughtful component structure, and attention to detail help deliver fast, reliable, and user-friendly experiences."
        },
    ]

    return(
        <div className="row container-fluid px-0 pt-100 pb-100 bg-white">
            <div className="container-class">
                <div>
                    <h2 className="mb-0">My Skills</h2>
                    <div className="mt-16">
                        <p className="regular mb-0">A focused set of frontend technologies I use to build modern web experiences.</p>
                    </div>
                </div>
                <div className="grid-2-col gap-40 mt-40">
                {
                    skillDetails.map((details)=>(
                        <SkillCard skills={details} key={details.id} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}
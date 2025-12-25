import "./techStack.scss"
import { TechTile } from "./TechTile"
import htmlIcon from "../../../../assets/images/html-5.png";
import cssIcon from "../../../../assets/images/css-3.png";
import jsIcon from "../../../../assets/images/js.png";
import tsIcon from "../../../../assets/images/typescript.png";
import reactIcon from "../../../../assets/images/physics.png";
import bootstrapIcon from "../../../../assets/images/bootstrap.png";
import figmaIcon from "../../../../assets/images/figma.png";
import sassIcon from "../../../../assets/images/sass.png";

export const TechStack  = () => {

    const TechList = [
        {name:"HTML 5", icon:htmlIcon},
        {name:"Css", icon:cssIcon},
        {name:"JS", icon:jsIcon},
        {name:"TS", icon:tsIcon},
        {name:"React", icon:reactIcon},
        {name:"Bootstrap", icon:bootstrapIcon},
        {name:"Figma", icon:figmaIcon},
        {name:"Sass", icon:sassIcon}
    ]

    return (
        <div className="row container-fluid px-0 pt-100 pb-100 techstack-section">
            <div className="container-class">
                <div className="grid-center">
                    <div>
                        <h2 className="text-center">Technologies I Work With</h2>
                        <div className="mt-16">
                            <p className="regular text-center">A selection of modern tools and technologies I use to build <br/>scalable, high-quality web interfaces.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 tech-tile-container">
                    {TechList.map((tech)=> (
                        <TechTile key={tech.name} {...tech} />
                    ))}
                </div>
            </div>
        </div>
    )
}
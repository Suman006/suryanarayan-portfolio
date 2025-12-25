import "./projectSection.scss"
import { ProjectTile } from "./ProjectTile";

export const ProjectSection = ({projects}) => {

    return (
        <div className="row container-fluid px-0 pt-100 pb-100 project-section">
            <div className="container-class">
                <div className="grid-center">
                    <div>
                        <h2 className="text-center">My Projects </h2>
                        <div className="mt-16">
                            <p className="regular text-center">A curated list of frontend projects highlighting real-world implementations, <br />UI precision, and modern web development standards.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-2-col gap-5 mt-5">
                    {
                        projects.map((project)=> (
                            <ProjectTile key={project.id} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
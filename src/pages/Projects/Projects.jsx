import { allProjects } from "../../data/projectsData"
import { ContactCTA } from "../Sections/home/Contact/ContactCTA"
import { ProjectSection } from "../Sections/home/ProjectSection/ProjectSection"
import { ProjectHero } from "../Sections/project/ProjectHero/ProjectHero"
import { ProjectRole } from "../Sections/project/ProjectRole/ProjectRole"
import { ProjectShowCase } from "../Sections/project/ProjectShowCase/ProjectShowCase"

export const Projects = () => {
    return(
        <div>
            <ProjectHero />
            <ProjectSection projects={allProjects} />
            <ProjectShowCase />
            <ProjectRole />
            <ContactCTA />
        </div>
    )
}
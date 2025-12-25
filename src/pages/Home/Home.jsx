import { allProjects } from "../../data/projectsData"
import { ContactCTA } from "../Sections/home/Contact/ContactCTA"
import { Experience } from "../Sections/home/Experience/Experience"
import { Hero } from "../Sections/home/Hero/Hero"
import { HowIWork } from "../Sections/home/HowIWork/HowIWork"
import { ProjectSection } from "../Sections/home/ProjectSection/ProjectSection"
import { Services } from "../Sections/home/Services/Services"
import { TechStack } from "../Sections/home/TechStack/TechStack"


export const HomePage  = () => {
    return(
       <>
        <Hero />
        <TechStack />
        <ProjectSection projects={allProjects.slice(0,4)} />
        <Experience />
        <Services />
        <HowIWork />
        <ContactCTA />
       </>
    )
}
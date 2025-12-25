import { AboutHero } from "../Sections/about/AboutHero/AboutHero"
import { AboutExperience } from "../Sections/about/MyExperience/AboutExperience"
import { Skills } from "../Sections/about/MySkills/Skills"
import { ContactCTA } from "../Sections/home/Contact/ContactCTA"
import { HowIWork } from "../Sections/home/HowIWork/HowIWork"

export const AboutPage = () => {
    return(
        <>
        <AboutHero />
        <Skills />
        <AboutExperience />
        <HowIWork backGround="secondary-background" />
        <ContactCTA />
        </>
    )
}
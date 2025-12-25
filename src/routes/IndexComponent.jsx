import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { HomePage } from "../pages/Home/Home"
import { AboutPage } from "../pages/About/About"
import { Projects } from "../pages/Projects/Projects"
import { Contact } from "../pages/Contact/Contact"

export const IndexComponent = () => {
    return(
        <Routes>
            <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}
import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../components/Navbar/Navbar"
import { FooterComponent } from "../components/Footer/Footer"
import ScrollToTop from "../components/ScrollToTop"

export const MainLayout = () => {
    return (
        <>
            <ScrollToTop />
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}
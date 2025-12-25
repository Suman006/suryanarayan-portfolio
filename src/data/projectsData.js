import healthCare from "../assets/images/medical-health-care.png";
import imrSoft from "../assets/images/imrsoft-website.png";
import imrsoftWebapp from "../assets/images/imrsoft-web-app.png";
import finbotWebapp from "../assets/images/finbot-web-app.png";
import finbotWeb from "../assets/images/finbot-website.png";
import zapstockWebapp from "../assets/images/zapstock-web-app.jpg";
import reactIcon from "../assets/images/physics.png";
import jsIcon from "../assets/images/js.png";
import cssIcon from "../assets/images/css-3.png"
import htmlIcon from "../assets/images/html-5.png"
import bootIcon from "../assets/images/bootstrap.png"
import sassIcon from "../assets/images/sass.png"
import nodeIcon from "../assets/images/nodejs.png";
import figmaIcon from "../assets/images/figma.png";
import chartIcon from "../assets/images/bar-chart.png";

export const allProjects = [
        {
            id: 1,
            title: "Finbot CRM Dashboard",
            image: finbotWebapp,
            description: "A modern loan management CRM with dealer tracking, leads, targets, and analytics designed and built with a clean, scalable UI for real business workflows.",
            skills: [
                { name: "HTML", icon: htmlIcon },
                { name: "SCSS", icon: sassIcon },
                { name: "JavaScript", icon: jsIcon },
                { name: "Nodejs", icon: nodeIcon }
            ],
            liveUrl: "https://app.finbot.in/"
        },
        {
            id: 2,
            title: "Finbot Website — Healthcare Finance Platform",
            image: finbotWeb,
            description: "A professional fintech platform connecting healthcare providers with optimized loan solutions, empowering doctors and clinics with digital financing options.",
            skills: [
                { name: "HTML", icon: htmlIcon },
                { name: "SCSS", icon: sassIcon },
                { name: "JavaScript", icon: jsIcon},
                { name: "Bootstrap", icon: bootIcon },
                { name: "Figma", icon: figmaIcon }
                
                
            ],
            liveUrl: "https://www.finbot.in/"
        },
        {
            id: 3,
            title: "MedCare – Doctor Appointment Booking",
            image: healthCare,
            description: "A responsive healthcare platform for booking doctor appointments with a clean, patient-focused user experience.",
            skills: [
                { name: "HTML", icon: htmlIcon },
                { name: "SCSS", icon: sassIcon },
                { name: "React", icon: reactIcon },
                { name: "JavaScript", icon: jsIcon }
            ],
            liveUrl:"https://medcity-care.vercel.app/"
        },
        {
            id: 4,
            title: "IMRSoft – Corporate IT Solutions Website",
            image: imrSoft,
            description: "A professional corporate website showcasing IT services, staffing solutions, and business capabilities.",
            skills: [
                { name: "HTML", icon: htmlIcon },
                { name: "JavaScript", icon: jsIcon },
                { name: "CSS", icon: cssIcon },
                { name: "BootStrap", icon: bootIcon }
            ],
            liveUrl:"https://imrsoft.com/"
        },
        {
            id: 5,
            title: "IMRSoft Recruitment Dashboard",
            image: imrsoftWebapp,
            description: "A modern, scalable recruitment management application featuring a clean UI, smart analytics, and modular workflows for interviews, employees, vendors, billing, and operations management.",
            skills: [
                {name:"HTML", icon:htmlIcon},
                { name: "JavaScript", icon: jsIcon },
                { name: "SCSS", icon: sassIcon },
                { name: "Charts", icon: chartIcon}
            ],
            liveUrl:"https://app.workflex.in/"
        },
        {
            id: 6,
            title: "ZapStock – Stock Market App",
            image: zapstockWebapp,
            description: "A modern stock market web application for tracking prices, trends, and financial insights with interactive UI.",
            skills: [
                { name: "Charts", icon: chartIcon},
                { name: "JavaScript", icon: jsIcon },
                { name: "CSS", icon: cssIcon },
                { name: "Bootstrap", icon: bootIcon }
            ],
            liveUrl:"https://zapstockk.webamoeba.com/"
        }
    ];
import "./services.scss";
import { ServiceTile } from "./ServiceTile";

export const Services  = () => {

    const Services = [
        {
            id:1,
            title: "Interface Design",
            number:"01",
            description:"Crafting clean, modern, and accessible user interfaces with a strong focus on usability and visual clarity.",
            skills:["UI/UX Design", "Design Systems", "Responsive Layouts"]
        },
        {
            id:2,
            title: "Web Development",
            number:"02",
            description:"Building scalable, high-performance web applications using modern frontend frameworks.",
            skills:["React.js", "Reusable Components", "API Integration"]
        },
        {
            id:3,
            title: "UI Engineering",
            number:"03",
            description:"Designing scalable frontend systems with reusable components and clean architecture.",
            skills:["Component Architecture", "Scalable UI Systems", "Design Systems"]
        }
    ]

    return(
        <div className="row container-fluid px-0 pt-100 pb-100 service-section">
            <div className="container-class">
                <div className="grid-center">
                    <h2 className="text-center m-0">What I Do</h2>
                    <div className="mt-16">
                        <p className="regular text-center mb-0">I design and build scalable, high-performance user interfaces with a strong focus on<br/> usability, clean architecture, and real-world production needs.</p>
                    </div>
                </div>
                <div className="grid-3-col mt-5 gap-5">
                    {
                        Services.map((service)=>(
                            <ServiceTile key={service.id} services={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import "./experience.scss"
import { ExperienceTile } from "./ExperienceTile"

export const Experience = () => {

    const experienceData = [
        {
            id: 1,
            company: "Finbot",
            role: "UI Developer",
            duration: "2023 — Present",
            points: [
                "Developed and maintained production-grade React applications",
                "Built reusable UI systems and scalable frontend architecture",
                "Worked on IMRSoft, ZapStock, and enterprise dashboards",
            ],
        },
        {
            id: 1,
            company: "AOF Engineering System",
            role: "Junior Developer",
            duration: "2022 — 2023",
            points: [
                "Developed responsive UIs using React and modern CSS",
                "Integrated frontend with Laravel APIs",
                "Improved UX through performance optimizations and bug fixes",
            ],
        }
    ]

    return (
        <div className="row container-fluid px-0 pt-100 pb-100 experience-section">
            <div className="container-class">
                <div className="grid-center">
                    <h2 className="text-center m-0">Experience</h2>
                    <div className="mt-16">
                        <p className="regular text-center mb-0">Building Scalable and user-focused interfcaes in real-world production environments.</p>
                    </div>
                </div>
                <div className="grid-center">
                    <div className="mt-5 exp-container">
                        {
                            experienceData.map((exp, index) => (
                                <ExperienceTile company={exp.company} role={exp.role} duration={exp.duration} points={exp.points}
                                    circleVariant={index === 0 ? "active" : "inactive"}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}



// import "./experience.scss";
// import { ExperienceTile } from "./ExperienceTile";

// export const Experience = () => {
//   const experienceData = [
//     {
//       id: 1,
//       company: "Finbot",
//       role: "Senior Frontend Developer",
//       duration: "2023 — Present",
//       isActive: true,
//       points: [
//         "Developed and maintained production-grade React applications",
//         "Built reusable UI systems and scalable frontend architecture",
//         "Worked on IMRSoft, ZapStock, and enterprise dashboards",
//       ],
//     },
//     {
//       id: 2,
//       company: "AOF Engineering System",
//       role: "Junior Developer",
//       duration: "2022 — 2023",
//       isActive: false,
//       points: [
//         "Developed responsive UIs using React and modern CSS",
//         "Integrated frontend with Laravel APIs",
//         "Improved UX through performance optimizations and bug fixes",
//       ],
//     },
//   ];

//   return (
//     <section className="experience-section">
//       <div className="container-class">
//         <div className="experience-header">
//           <h2>Experience</h2>
//           <p className="regular">
//             Real-world experience building scalable, user-focused frontend
//             systems.
//           </p>
//         </div>

//         <div className="experience-timeline">
//           {experienceData.map((exp) => (
//             <ExperienceTile key={exp.id} {...exp} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
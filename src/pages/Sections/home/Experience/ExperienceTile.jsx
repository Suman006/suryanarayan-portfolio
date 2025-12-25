import "./experience.scss";

export const ExperienceTile = ({company, role, duration, points, circleVariant}) => {
    return(
        <div className="experience-tile">
            <div className="d-flex position-relative">
                <div className={`exp-circle ${circleVariant}`}></div>
                <div>
                    <div className="d-flex flex-wrap gap-3">
                        <div className="duration-time">{duration}</div>
                        <div>
                            <div>
                                <h4 className="mb-1">{company}</h4>
                            </div>
                            <div>
                                <p className="regular mb-0">{role}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <ul className="exp-point-container">
                            {
                                points.map((point, index)=>(
                                    <li className="exp-point" key={index}>{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


// import "./experience.scss";

// export const ExperienceTile = ({
//   company,
//   role,
//   duration,
//   points,
//   isActive,
// }) => {
//   return (
//     <div className={`experience-card ${isActive ? "active" : ""}`}>
//       <div className="timeline-marker">
//         <span className="dot"></span>
//         <span className="line"></span>
//       </div>

//       <div className="card-content">
//         <div className="card-header">
//           <span className="duration">{duration}</span>
//           {isActive && <span className="badge">Currently Working</span>}
//         </div>

//         <h4 className="company">{company}</h4>
//         <p className="role">{role}</p>

//         <ul className="points">
//           {points.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
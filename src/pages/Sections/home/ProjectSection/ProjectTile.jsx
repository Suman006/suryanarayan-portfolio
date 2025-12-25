import "./projectSection.scss";

export const ProjectTile = ({ project }) => {
    const { image, title, description, skills, liveUrl  } = project;
    return (
        <div className="w-card card-column-align project-card">
            <div className="w-card-body">
                <img src={image} alt={title} className="project-img" />
                <div className="mt-24">
                    <h5>{title}</h5>
                </div>
                <div className="mt-10">
                    <p className="regular">{description}</p>
                </div>
                <div className="skill-pills">
                    {
                        skills?.map((skill, index) => (
                            <div className="pill" key={index}>
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span>{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-card-footer">
                <div className="d-flex gap-16 mt-4">
                    <button className="primary-btn" style={{ flex: 1 }} onClick={()=>window.open(liveUrl, "_blank")}>Live Demo</button>
                    <button className="secondary-btn" style={{ flex: 1 }}>View Details</button>
                </div>
            </div>
        </div>
    )
}
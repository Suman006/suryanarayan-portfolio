import "./techStack.scss";

export const TechTile = ({ icon, name }) => {
    return (
        <div className="tech-tile">
            <div className="tech-icon">
                <img src={icon} alt="" />
            </div>
            <div className="mt-3">
                <h6 className="mb-0">{name}</h6>
            </div>
        </div>
    )
}
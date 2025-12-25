export const SkillCard = ({skills}) => {
    const {icon, title, description} = skills;
    return(
        <div className="w-card p-40 primary-tile">
            <div className="w-card-body">
                <div className="icon-layer">
                    <img src={icon} alt={title} width="56px" />
                </div>
                <div className="mt-24 mb-16">
                    <h5 className="mb-0">{title}</h5>
                </div>
                <p className="regular mb-0">{description}</p>
            </div>
        </div>
    )
}
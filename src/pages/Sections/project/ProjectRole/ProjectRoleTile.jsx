export const ProjectRoleTile = ({details}) => {
    const  {icon, title, description} = details;
    return(
        <div className="w-card primary-tile">
            <div className="w-card-body">
                <div className="d-flex gap-4 mb-16">
                    <div className="icon-layer">
                        <img src={icon} alt={title} width="56px" />
                    </div>
                    <h5>{title}</h5>
                </div>
                <p className="regular mb-0">{description}</p>
            </div>
        </div>
    )
}
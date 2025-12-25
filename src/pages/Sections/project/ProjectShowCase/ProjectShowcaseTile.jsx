export const ProjectShowcaseTile  = ({projectShowcase}) => {
    const {icon, title, description} = projectShowcase;
    return(
        <div className="w-card secondary-tile">
            <div className="w-card-body">
                <div className="d-flex gap-4 flex-wrap mb-24">
                    <div className="icon-layer">
                        <img src={icon} alt={title} width="56px" />
                    </div>
                    <h5 className="m-0 w-50">{title}</h5>
                </div>
                <p className="regular mb-0">{description}</p>
            </div>
        </div>
    )
}
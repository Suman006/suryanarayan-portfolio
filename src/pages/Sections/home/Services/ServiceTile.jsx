import "./services.scss"

export const ServiceTile = ({services}) => {
    const {title, number, description, skills} = services;
    return(
        <div className="w-card card-column-align service-card">
            <div className="w-card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">{title}</h5>
                    <div className="number">{number}</div>
                </div>
                <p className="regular">{description}</p>
            </div>
            <div className="w-card-footer foot-border">
                {
                    skills.map((skill, index)=>(
                        <div className="d-flex gap-3 align-items-center mt-2" key={index}>
                            <i className="bi bi-arrow-up-right-circle circle-icon"></i>
                            <p className="regular mb-0 text-black">{skill}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
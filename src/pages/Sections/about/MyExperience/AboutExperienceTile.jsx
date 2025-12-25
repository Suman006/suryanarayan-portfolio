import "./aboutExperience.scss";

export const AboutExperienceTile  = ({experiences}) => {
    const {image, company, designation, duration, points} = experiences;
    return(
        <div className="w-card secondary-tile">
            <div className="w-card-body">
                <div className="d-flex gap-24 flex-wrap">
                    <div className="icon-layer">
                        <img src={image} width="56px" alt={company} />
                    </div>
                    <div>
                        <h4 className="mb-0">{company}</h4>
                        <p className="regular mb-1">{designation}</p>
                        <span className="duration mb-0">{duration}</span>
                    </div>
                </div>
                <div>
                    <ul className="exp-point-container mt-30">
                        {
                        points.map((point, index)=>(
                            <li className="exp-point" key={index}>{point}</li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
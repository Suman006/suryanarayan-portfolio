import "./howIWork.scss";

export const WorkStep  = ({WorkDetails}) => {
    const {step, title, icon, description, withConnector} = WorkDetails;
    return(
        <div className={`w-card card-column-align  ${withConnector ? "step-column-border" : "step-connector"}`}>
                <div className="w-card-body">
                    <div className="step-flex">
                    <div className="step-number d-flex justify-content-center align-items-center">{step}</div>
                    {/* <div className="step-border"></div> */}
                </div>
                </div>

                <div className="work-card">
                    <div className="w-card-body">
                        <h5 className="title">{title}</h5>
                    </div>
                    <div className="w-card-footer icon-flex">
                        <img src={icon} className="work-icon" alt={title}/>
                        <p className="regular mb-0 description">{description}</p>
                    </div>
                </div> 
                    
        </div>
    )
}
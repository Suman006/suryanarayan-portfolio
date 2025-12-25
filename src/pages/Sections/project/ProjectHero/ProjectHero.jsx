import "./projectHero.scss";

export const ProjectHero = () =>{
    return(
        <div className="row container-fluid px-0 project-hero">
            <div className="container-class">
                <div className="grid-center">
                    <div>
                        <h1 className="text-center">Projects That Power Real Products</h1>
                        <div className="mt-16">
                            <p className="regular m-0 text-center">A showcase of real-world projects where frontend engineering meets business impact. Designed and built with a <br />strong emphasis on structure, usability, and long-term scalability across modern web applications.</p>
                        </div>
                        <div className="mt-30">
                            <button className="primary-btn d-block m-auto">Explore My Projects <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
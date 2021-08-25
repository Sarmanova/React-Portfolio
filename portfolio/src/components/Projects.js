import React from 'react'

const Projects = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/956/original/LandingPageEx.png?1629907022" className="card-img-top" alt="Pickflix & Grill"/>
            <div className="card-body">
                <br/>
                <h5 className="card-title">Pickflix/Grill</h5>
                <p className="card-text">Group 3 has created Pickflix & Grill, a movie and recipe generator that takes input from the user in the form of a movie genre and a recipe ingredient, and makes home date night decisions easier in a couple of clicks by accessing two server-side API's.</p>
                <a href="https://cnvives.github.io/group-3/" className="btn btn-primary">View wedpage</a>
            </div>
        </div>
        
    )
}
export default Projects;
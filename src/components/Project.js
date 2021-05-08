import React, { Fragment } from 'react';

const Project = (props) => {
    return (
        <div className="project">
            <h1>{props.name}</h1>
            <div className="project-image-container">
                {
                    props.image2
                    ?  
                    <Fragment>  
                        <img src={props.image} alt="" />
                        <img src={props.image2} alt="" />
                    </Fragment>
                    :
                    <img src={props.image} style={{width: "85%"}} alt="" />
                }
                
            </div>
            <p className="description">{props.description}</p>
        </div>
    );
}

export default Project;

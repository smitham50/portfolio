import React, { Fragment } from 'react';

const Project = (props) => {
    const {
        builtWith,
        name,
        image,
        image2,
        description
    } = props;

    const renderListItems = () => {
        return builtWith.map(listItem => {
            console.log(listItem)
            return <li>{listItem}</li>
        });
    }

    return (
        <div className="project">
            <h1>{name}</h1>
            <div className="project-body">
                <div className="project-image-container">
                    {
                        image2
                        ?  
                        <Fragment>  
                            <img src={image} alt="" />
                            <img src={image2} alt="" />
                        </Fragment>
                        :
                        <img src={image}  alt="" />
                    }
                </div>
                <div className="project-info">
                    <p className="description">{description}</p>
                    <p style={{width: "30%"}}>Built with: </p>
                    <ul>
                        { renderListItems() }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;

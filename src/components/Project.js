import React, { Fragment } from 'react';
import '../component-stylesheets/Project.css';

const Project = (props) => {
    const {
        builtWith,
        name,
        image,
        image2,
        description,
        repo,
        url,
        gitHubIcon,
        folderIcon
    } = props;

    const renderListItems = () => {
        return builtWith.map(listItem => {
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
                            <img src={process.env.PUBLIC_URL + image} alt="" />
                            <img src={process.env.PUBLIC_URL + image2} alt="" />
                        </Fragment>
                        :
                        <img src={process.env.PUBLIC_URL + image}  alt="" />
                    }
                </div>
                <div className="project-info">
                    <p className="description">{description}</p>
                    <p style={{textDecoration: "underline"}}>Built with</p>
                    <ul>
                        { renderListItems() }
                    </ul>
                    <a href={repo} className="project-link"><img src={process.env.PUBLIC_URL + gitHubIcon} alt="" /></a>
                    {
                        url
                        ? <a href={url} className="project-link"><img src={process.env.PUBLIC_URL + folderIcon} alt="" /></a>
                        : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;

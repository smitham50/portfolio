import React from 'react';
import {
  ProjectContainer,
  ProjectBody,
  ProjectImageContainer,
  ProjectImage,
  ProjectInfo,
  List,
  ListItem,
  Description,
  BuiltWith,
  ProjectLink,
  ProjectLinkIcon,
  ProjectLinkText
} from '../styled/ProjectStyled';

const Project = (props) => {
  const {
    builtWith,
    name,
    images,
    description,
    repo,
    url,
    gitHubIcon,
    folderIcon
  } = props;

  const { PUBLIC_URL } = process.env;

  const renderListItems = () => {
    return builtWith.map(listItem => {
      return <ListItem>{ listItem }</ListItem>
    });
  }

  const renderImages = () => {
    return images.map(image => {
      return <ProjectImage src={ PUBLIC_URL + image } alt="" />
    })
  }

  return (
    <ProjectContainer>
      <h1>{ name }</h1>
      <ProjectBody>
        <ProjectImageContainer>
          { renderImages() }
        </ProjectImageContainer>
        <ProjectInfo>
          <Description>{ description }</Description>
          <BuiltWith>Built with</BuiltWith>
          <List>
            { renderListItems() }
          </List>
          <ProjectLink href={ repo }>
            <ProjectLinkIcon src={ PUBLIC_URL + gitHubIcon } alt="" />
            <ProjectLinkText>Repo</ProjectLinkText>
          </ProjectLink>
          {/* {
            url &&  <ProjectLink href={ url }>
                  <ProjectLinkIcon src={ PUBLIC_URL + folderIcon } alt="" />
                  <ProjectLinkText>Launch</ProjectLinkText>
                </ProjectLink>
          } */}
        </ProjectInfo>
      </ProjectBody>
    </ProjectContainer>
  );
}

export default Project;

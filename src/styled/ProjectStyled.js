import styled from "styled-components";

export const ProjectContainer = styled.div`
  background: #f9f9f9ad;
  color: #3f3e42;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;

  &:nth-of-type(2n) {
    background: #f5f4f4;
  }

  &:nth-of-type(2n) .project-info {
    background: #a5a5a514;
  }
`;

export const ProjectBody = styled.div`
  display: flex;

  & > * {
    margin: 2rem;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ProjectImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: auto;
  }
`;

export const ProjectImage = styled.img`
  width: auto;
  border-radius: 10px;
  margin: 1rem;

  @media screen and (max-width: 1000px) {
    width: auto;
    max-width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  }
`;

export const ProjectInfo = styled.div`
  width: 30%;
  background: #cccccc14;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: auto;
    padding: 2rem 0;
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export const BuiltWith = styled.p`
  text-decoration: underline;
`;

export const ProjectLink = styled.a`
  margin: 0.5rem;
  position: relative;
`;

export const ProjectLinkIcon = styled.img`
  width: 30px;
  transition: 300ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectLinkText = styled.div`
  font-size: 0.5rem;
  position: absolute;
  left: 0.05rem;
  right: 0.05rem;
  text-decoration: none;
  color: #3f3e42;
`;

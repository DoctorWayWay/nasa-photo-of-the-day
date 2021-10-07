import React from "react";
import styled from "styled-components";

// Styled-Components Styling
const StyledAbout = styled.div`
  color: ${(props) => props.theme.color.light};
  height: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  padding: 2%;
`;

const About = (props) => {
  const { copyright, date, explanation, title } = props;
  return (
    <StyledAbout>
      <h1>{title}</h1>
      <h2>By: {copyright}</h2>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </StyledAbout>
  );
};

export default About;

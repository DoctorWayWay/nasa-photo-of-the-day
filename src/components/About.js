import React from "react";

const About = (props) => {
  const { copyright, date, explanation, title } = props;
  return (
    <div>
      <h1>{title}</h1>
      <h2>By {copyright}</h2>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default About;

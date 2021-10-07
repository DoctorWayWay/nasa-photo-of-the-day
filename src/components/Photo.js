import React from "react";
import styled from "styled-components";
// Styled Component
const StyledPhoto = styled.div`
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`;

const Photo = (props) => {
  const { url } = props;
  return (
    <StyledPhoto
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></StyledPhoto>
  );
};

export default Photo;

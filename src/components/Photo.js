import React from "react";

const Photo = (props) => {
  const { url } = props;
  return (
    <div>
      <img src={url} alt="NASA's APOD." />
    </div>
  );
};

export default Photo;

import React from "react";

const Photo = (props) => {
  const { url } = props;
  return (
    <div>
      <img src={url} />
    </div>
  );
};

export default Photo;

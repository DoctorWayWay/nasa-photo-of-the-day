import React from "react";

const Photo = (props) => {
  const { url } = props;
  return (
    <div>
      <img
        src={url}
        alt="This is an image of NASA's Astronomy Picture of the Day."
      />
    </div>
  );
};

export default Photo;

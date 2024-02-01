import React from "react";

function Avatar(props) {
  return (
    <img className="circle-img" src={props.imgSource} alt={props.imgAlt} />
  );
}

export default Avatar;

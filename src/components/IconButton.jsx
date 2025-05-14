import React from "react";

export const IconButton = ({ icon, className, alt, imgClass }) => {
  return (
    <button className={className}>
      <img src={icon} alt={alt} className={imgClass} />
    </button>
  );
};

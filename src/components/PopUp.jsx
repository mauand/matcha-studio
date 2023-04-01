import React from "react";

const PopUp = (props) => {
  return props.trigger ? (
    
      <div>
        {props.children}
        </div>
  ) : (
    ""
  );
};

export default PopUp;

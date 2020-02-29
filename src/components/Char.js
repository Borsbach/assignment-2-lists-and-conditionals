import React from "react";

const Char = props => {
  const style = {
    display: "inline-block",
    padding: "12px",
    textAlign: "center",
    margin: "12px",
    border: "1px solid black"
  };
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default Char;

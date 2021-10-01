import React from "react"

const Text = (props) => {
  // console.log(props);

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };

    return (
      <div>
        <h1>こんにちは！</h1>
        <p style={contentStyle}>{props.message}</p>
        <p style={contentPinkStyle}>元気です！</p>
        <p style={contentStyle}>{props.children}</p>        
      </div>
    );
};

export default Text;
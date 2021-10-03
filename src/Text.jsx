import React from "react"

const Text = (props) => {
  // console.log(props);

  const { message, color, children } = props;

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  const contentStyle = {
    color: color,
    fontSize: "20px"
  };

    return (
      <div>
        <h1>こんにちは！</h1>
        <p style={contentStyle}>{message}</p>
        <p style={contentPinkStyle}>元気です！</p>
        <p style={contentStyle}>{children}</p>        
      </div>
    );
};

export default Text;
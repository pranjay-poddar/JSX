import React from "react";

export default function Textform(props) {
  return (
    <div>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8"></textarea>
      </div>
      <button className="button btn btn-primary">Convert To Uppercase</button>
    </div>
  );
}

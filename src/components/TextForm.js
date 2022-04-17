import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case !!", "success");
  }
  function handleOnChange(event) {
    console.log("onChange was clicked");
    setText(event.target.value);
  }
  function handleLoClick(event) {
    console.log("onChange was clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case !!", "success");
  }
  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            {" "}
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2"> Copy Text</button>
          <button className="btn btn-primary mx-2"> Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2"> Clear Text</button>
        </div>
      </div>
      <div className="container my-2">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleloClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');

    return (
        <>

        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
        </div>
        <div className="container">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words  and  {text.length} characters
            </p>
            <p> {0.008* text.split(" ").length}Minutes to read </p>
            <h2>Preview</h2>
         


            <p>{text}</p>

        </div>
        </>
    )
}

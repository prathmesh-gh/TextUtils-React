import React, { useState } from 'react'

export default function Form(props) {

    const hanadleclickupper = () => {
        // console.log("Convert to Uppercase clicked" +text);
        let Newtext = text.toUpperCase();
        setText(Newtext);
        props.showAlert("Text is Converted to Uppercase", "success");
    }
    const hanadleclicklower = () => {
        // console.log("Convert to Lowercase clicked" +text);
        let Newtext = text.toLowerCase();
        setText(Newtext);
        props.showAlert("Text is Converted to Lowercase", "success");
    }
    const handlecleartext = () => {
        // console.log("Clear text clicked" +text);
        let Newtext = '';
        setText(Newtext)
        props.showAlert("Text is cleared", "success");
    }
    const removeExtraSpaces=()=> {
        // Trim leading and trailing spaces, and replace multiple spaces with a single space
         let Newtext=text.trim().replace(/\s+/g, ' ');
         setText(Newtext)
         props.showAlert("Removed Extra Spacess From Text", "success");
    }
    const handleonchange = (event) => {
        // console.log("onchange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h1>{props.heading}</h1>
            <div className="mb-3 " >
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={hanadleclickupper}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={hanadleclicklower}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={removeExtraSpaces}>Remove Extra spaces</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handlecleartext}>Clear Text</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <ul>
                    <li>Number of Words: {text.split(" ").filter(word => word.length > 0).length}</li>
                    <li>Number of Characters: {text.length}</li>
                    <li>Number of seconds to Read: {(text.split(" ").filter(word => word.length > 0).length * 60 / 200).toFixed(2)}</li>
                </ul>
                <h3>Preview Text</h3>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
            </div>
        </div>
    )
}
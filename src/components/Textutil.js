import React, { useState } from "react";
import App from '../App';


export default function TextManipulation(props) {

    const [text, setText] = useState('');
    const [pre, setPre] = useState('Nothing To View');
    const [test, setTest] = useState("Norting To Test");


    const handleUpClick = () => {
        let temp = text.toUpperCase();
        setText(temp);
        setPre(temp);
    }
    const handleLoClick = () => {
        let temp = text.toLowerCase();
        setText(temp);
        setPre(temp);
    }
    const handleCpClick = () => {

        let temp = text.split(/[ ]+/);
        temp = temp.join(" ");

        if (temp[temp.length - 1] === " ") {
            temp = temp.substring(0, temp.length - 1);
            setText(temp);
        }
        let t = temp.split(' ');
        let ar = [];
        t.forEach(element => {
            ar.push(element[0].toUpperCase() + element.substring(1, element.length));
        });
        let p = ar.join(' ');
        setText(p);
        setPre(p);

    }
    const copyText = () => {
        let t = document.querySelector(".myTextArea");
        t.select();
        text.setSelectionRange(0, text.length);
        navigator.clipboard.writeText(t.value);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const rmspace = () => {
        let temp = text.split(/[ ]+/);
        setText(temp.join(" "));
        setPre(temp.join(" "));
    }
    const makeEmpty = () => {
        setText('');
        setPre(text);
    }

    return (
        <>

            <div className="text-center mx-5 my-5 " style={props.changeStyle}>
                <div>
                    <textarea className="form-control mb-3 myTextArea" /* style={{color: props.mode==='Light'?'white':'black' ,  backgroundColor:props.mode==='Light'?'black':'white' }} */ value={text} onChange={handleOnChange} rows="5" placeholder='Enter Text Here ...' >

                    </textarea></div>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>UpperCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>LowerCase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleCpClick}>Capitalize</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={rmspace}>Remove Extra Space</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-danger mx-2 my-2" onClick={makeEmpty}>Clear</button>
            </div>
            <div className="text-center mx-5 my-5 ">
                <h3>Word Count :</h3>
                <span> {text.split(' ').filter((element) => { return element.length !== 0 }).length} Words And {text.length.toString()} Characters</span><br />
                <span>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Required To Read</span>
            </div>
            <div className="text-center mx-5 my-5 ">
                <h3>Preview</h3>
                <span>{pre}</span>
            </div>
            <div className="text-center mx-5 my-5 ">
                <h3>Test Aria</h3>
                <span>{test}</span>
            </div>
        </>
    )
}
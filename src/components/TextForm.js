import { useState } from 'react'
function TextForm(props) {
    // for convert lower text to upper case
    const handleUpClick = () => {
        //console.log('hii' + text)
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text has been converted to upper case", "success")
    }
    // for convert upper text to lower text
    const handleLpClick = () => {
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text has been converted to lower case", "success")
    }
    // for remove text
    const handleClearText = () => {
        setText('')
        props.showAlert("Text has been removed", "success")
    }
    const handleOnChange = (event) => {
        //console.log('onchanged')
        setText(event.target.value)
    }
    // for copy the text
    const handleCopy = () => {
        const text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied", "success")
    }
    // for remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed", "success")
    }
    // remove empty lines
    const handleEmptyLines = () => {
        let newText = text.split("\n").filter((line) => line.trim() !== "").join("\n")
        setText(newText)
        props.showAlert("Empty lines has been removed", "success")
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#989ca9' : 'white', color: props.mode === 'dark' ? 'whibtn-smte' : 'black' }}></textarea>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleLpClick}>Convert to Lowercase</button>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleClearText}>Clear Text</button>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <button className={`btn btn-sm btn-${props.navClass} my-2`} disabled={text.length===0} onClick={handleEmptyLines}>Remove Empty Lines</button>
                    </div>
                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} word and {text.length} characters</p>
                <p>{parseFloat((0.008) * (text.split(" ").filter((element)=>{return element.length!==0}).length)).toFixed(2)} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
export default TextForm
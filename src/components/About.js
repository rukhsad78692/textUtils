// import { useState } from "react"
function About(props) {

    let myStyle = {
        color : props.mode ==='dark'?'white':'',
        backgroundColor : props.mode ==='dark'?'grey':'white'
    }
    

    return (
        <>
            <div className="container mx-2 my-4" style={myStyle}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Analyze you text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            This tool analyzes your text, providing a word count, total length, and the number of uppercase and lowercase characters. It also allows you to copy the text, remove extra spaces, and delete empty lines. Simplify text formatting and ensure your content is clean and concise!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Text utils are free online tools that help manipulate and format text efficiently. They can perform tasks like removing duplicates, changing text cases, and counting characters or words. These tools are accessible and easy to use, saving time for anyone working with text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong> Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            This tool is fully browser compatible, ensuring a seamless experience across all major web browsers. No matter which browser you're using, the tool adapts and functions smoothly. Enjoy hassle-free performance on Chrome, Firefox, Edge, and more!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default About
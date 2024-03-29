import React, { FC } from 'react';

interface LandingPage {

}

let headStyle = {
    background: "#FFCB46"
}
let imgStyle = {
    maxWidth: 500,
    background: "grey",
    borderRadius: "50%"
}
let textStyle = {
    fontSize: 30,
    background: "#FFD74B",
    color: "white"
}
const Title: FC<LandingPage> = ({ children }) => {
    return (
        <div id="landingpage">
            <div className="d-flex flex-row align-items-center justify-content-center flex-wrap" style={headStyle}>
                <h1 className="p-5" style={{ fontSize: 200, color:"white" }}>Hello.</h1>
                <div className="p-5" >
                    <img src="../../images/workph.jpg" className='img-fluid' style={imgStyle} alt=""></img>
                </div>
                
            </div>
            <div className='text-start p-5' style={textStyle}>
                <div className='text-start p-5'>
                My  name is Phil Burney and welcome to my website, philburney.com!  Here, you can find out how I made
                this website,  among other projects that I have in my portfolio.  Additionally, I have a Resume to view. Feel free to look around!
                </div>
            </div>
           



        </div>
    );
};

export default Title;
import React, { FC } from 'react';

type ContactMe = {

}
let style = {
    maxWidth: 1200,
    fontSize: 18,
    fontFamily: 'Roboto, sans-serif',

}
const Title: FC<ContactMe> = ({ }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Contact Me</h1>
            <div style = {style} className="d-flex-inline flex-column justify-content-center align-items-center">
                <span>Questions, comments, or would you like to schedule an interview? Either submit the form below or send an email to 
                    peburney@gmail.com!</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
            <input type = "text"></input>
            <input type = "text"></input>
            <textarea className="textbox"></textarea>
            </div>


        </div>
    );
};

export default Title;
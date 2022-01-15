import React, { FC } from 'react';

type AboutWebsite = {

}
let style = {


}
const Title: FC<AboutWebsite> = ({ }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <h1>About the Website</h1>
            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                This website was created over the course of three days using the React framework in 
                conjunction with Bootstrap 5.0.  The coding language Typescript was used for the entire
                implemntation of the website.  To view the source code, click here
            </div>

        </div>
    );
};

export default Title;
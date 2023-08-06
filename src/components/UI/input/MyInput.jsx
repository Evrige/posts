import React from 'react';
import classes from "../input/MyInput.module.scss"
const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;
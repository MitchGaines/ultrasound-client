import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
    <button className={[classes.drawBorder, classes.btn].join(' ')}>{props.name}</button>
);

export default Button;
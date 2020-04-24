import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
    <div className={classes.Header}>
        <h1>{props.title}</h1>
    </div>
);

export default Header;
import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
    <header>
        <div className={classes.Header}>
            <h1>{props.title}</h1>
        </div>
    </header>
);

export default Header;
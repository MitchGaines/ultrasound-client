import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
      <Header title="Ultrasound Modelling" />
      <main className={classes.Content}>
          {props.children}
      </main>
  </Aux>
);

export default layout;
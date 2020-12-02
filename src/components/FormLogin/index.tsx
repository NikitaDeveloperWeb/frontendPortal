import React from 'react';
import { MainTextField, ButtonMain } from '../';
import { Route, Link } from 'react-router-dom';
import useStyles from '../../styles';

//Массив значений полей

function FormLogin() {
  const classes = useStyles();

  return (
    <form className={classes.formStyles}>
      <MainTextField placeholderValue="Username" typeField="text" />
      <MainTextField placeholderValue="Password" typeField="password" />
      <Route>
        <Link to="/home">
          <ButtonMain buttonValue="Sign In" />
        </Link>
      </Route>
    </form>
  );
}

export default FormLogin;

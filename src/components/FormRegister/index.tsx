import React from 'react';
import { ButtonMain } from '../';
import useStyles from '../../styles';
import MainTextField from '../MainTextField';

function FormRegister() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.formRegister}>
        <MainTextField placeholderValue="Mail" typeField="e-mail" />
        <MainTextField placeholderValue="First name" typeField="text" />
        <MainTextField placeholderValue="Last name" typeField="text" />
        <MainTextField placeholderValue="Birthday " typeField="date" />
        <MainTextField placeholderValue="Password" typeField="password" />
        <MainTextField placeholderValue="Restore password" typeField="password" />
        <ButtonMain buttonValue="Sign up" />
      </form>
    </div>
  );
}

export default FormRegister;

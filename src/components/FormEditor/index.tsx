import React from 'react';
import { ButtonMain } from '../';
import useStyles from '../../styles';
import MainTextField from '../MainTextField';

function FormEditor() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.formEditor}>
        <MainTextField placeholderValue="First name" typeField="text" />
        <MainTextField placeholderValue="Last name" typeField="text" />
        <MainTextField placeholderValue="Mail" typeField="e-mail" />
        <MainTextField placeholderValue="Birthday " typeField="date" />
        <ButtonMain buttonValue="Sign up" />
      </form>
    </div>
  );
}

export default FormEditor;

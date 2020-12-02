import React from 'react';
import { ButtonMain } from '..';
import MainTextField from '../MainTextField';
import useStyle from '../../styles';
function FormReset() {
  const classes = useStyle();
  return (
    <form className={classes.resetFormStyle}>
      <MainTextField placeholderValue="Mail" typeField="e-mail" />
      <ButtonMain buttonValue="Submit" />
    </form>
  );
}

export default FormReset;

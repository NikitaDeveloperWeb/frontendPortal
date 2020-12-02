import React from 'react';

import useStyles from '../../styles';

interface ButtonProp {
  buttonValue: string;
}

function ButtonMain({ buttonValue }: ButtonProp) {
  const classes = useStyles();
  return <button className={classes.buttonStyle}>{buttonValue}</button>;
}

export default ButtonMain;

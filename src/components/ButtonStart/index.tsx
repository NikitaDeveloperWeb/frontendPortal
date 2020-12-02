import React, { useState } from 'react';

import useStyles from '../../styles';
interface ButtonProps {
  children: React.ReactNode;
}

function ButtonStart({ children }: ButtonProps) {
  const [hover, setHover] = useState(false);

  const onHoverButton = () => {
    setHover(!hover);
  };

  const classes = useStyles();
  return (
    <button
      className={hover === false ? classes.buttonLoginPageStart : classes.buttonLoginPageStartHover}
      onMouseOver={() => onHoverButton()}
      onMouseOut={() => onHoverButton()}
    >
      {children}
    </button>
  );
}

export default ButtonStart;

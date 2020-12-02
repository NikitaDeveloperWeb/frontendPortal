import React from 'react';
import useStyles from '../../styles';

interface MainFieldProps {
  placeholderValue: string;
  typeField: string;
}

function MainTextField({ placeholderValue, typeField }: MainFieldProps) {
  const styless = useStyles();

  return (
    <div>
      <input type={typeField} placeholder={placeholderValue} className={styless.fieldStyle} />
    </div>
  );
}

export default MainTextField;

import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

interface skillsProps {
  stackSkills: string;
  mySelf: string;
}

function ScillsMe({ stackSkills, mySelf }: skillsProps) {
  const classes = useStyles();
  return (
    <div className="wrapperSkills">
      <ul>
        <li>
          <Typography style={{ color: '#074A87', fontSize: 15 }}>Stack:</Typography>
          <br />
          <Typography>{stackSkills}</Typography>
        </li>
        <br />
        <li>
          <Typography style={{ color: '#074A87', fontSize: 15 }}>About myself:</Typography>
          <br />
          <Typography>{mySelf}</Typography>
        </li>
      </ul>
    </div>
  );
}

export default ScillsMe;

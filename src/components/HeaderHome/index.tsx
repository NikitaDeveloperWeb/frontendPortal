import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

interface HeaderHomeProps {
  title: string;
}

function HeaderHome({ title }: HeaderHomeProps) {
  const classes = useStyles();
  return (
    <div className={classes.headerHomeStyle}>
      <Typography variant="h4" className={classes.homePageTitle}>
        Home
      </Typography>

      <Typography variant="h6" className={classes.homePagePodTitle}>
        {title}
      </Typography>
    </div>
  );
}

export default HeaderHome;

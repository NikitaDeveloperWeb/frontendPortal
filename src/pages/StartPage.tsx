import React from 'react';
import { Typography } from '@material-ui/core';
import { ButtonStart } from '../components';
import useStyles from '../styles';
import { Link } from 'react-router-dom';

function StartPage() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.introBlock}>
        <Typography variant="h2" className={classes.startPageFontTitle}>
          Web development
          <br /> and
          <br /> design portal
        </Typography>
        <Link to="/login">
          <ButtonStart children="Login" />
        </Link>
      </section>

      <Typography variant="h6" className={classes.startPageFontSubtitle}>
        Development is Easy
      </Typography>
    </div>
  );
}

export default StartPage;

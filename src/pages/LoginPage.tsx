import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { FormLogin } from '../components';
import useStyles from '../styles';

function LoginPage() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapperLoginPage}>
        <section className={classes.loginSideWrapper}>
          <Typography variant="h5">Sign in</Typography>
          <FormLogin />
          <Route>
            <ul className={classes.linkStyle}>
              <li>
                <Link to="/restorePassword">
                  <Typography className={classes.listStyle}>Forgot password?</Typography>
                </Link>
              </li>
              <li>
                <Link to="/signUp">
                  <Typography className={classes.listStyle}>
                    Don't have an account? Sign Up
                  </Typography>
                </Link>
              </li>
            </ul>
          </Route>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;

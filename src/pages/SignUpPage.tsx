import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles';
import { FormRegister } from '../components';
import { Route, Link } from 'react-router-dom';
function SignUpPage() {
  const classes = useStyles();
  return (
    <div className={classes.wrapperSignUp}>
      <section className={classes.registerSection}>
        <Typography variant="h5">Sign Up</Typography>
        <FormRegister />

        <Route>
          <ul className={classes.linkStyle} style={{ justifyContent: 'center' }}>
            <li>
              <Link to="/login">
                <Typography className={classes.listStyle}>
                  Already have an account? Sign in
                </Typography>
              </Link>
            </li>
          </ul>
        </Route>
      </section>
    </div>
  );
}

export default SignUpPage;

import { Typography } from '@material-ui/core';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { FormReset } from '../components';
import useStyle from '../styles';

function ResetPasswordPage() {
  const classes = useStyle();
  return (
    <div className={classes.wrapperRestorePass}>
      <section className={classes.resetSection}>
        <Typography variant="h5">Reset your password</Typography>
        <Typography variant="h6" style={{ textAlign: 'center', fontSize: 10, color: '	#D4D9E4' }}>
          We will send you an
          <br /> e-mail with the settings.
        </Typography>
        <FormReset />
        <Route>
          <ul className={classes.linkStyle} style={{ justifyContent: 'center' }}>
            <li>
              <Link to="/login">
                <Typography className={classes.listStyle}>I remembered my password.</Typography>
              </Link>
            </li>
          </ul>
        </Route>
      </section>
    </div>
  );
}

export default ResetPasswordPage;

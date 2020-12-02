import React from 'react';
import { Workspace } from '../components';
import useStyles from '../styles';
function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.wrapperHome}>
      <section className={classes.sectionUserInterface}>
        <Workspace />
      </section>
    </div>
  );
}

export default HomePage;

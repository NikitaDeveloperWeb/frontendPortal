import React from 'react';
import useStyles from '../../styles';
import UserProfile from '../UserProfile';
import { NavigationPanel } from '..';
import Messeger from '../Messeger';

function Workspace() {
  const classes = useStyles();

  return (
    <div className={classes.workspace}>
      <NavigationPanel />
      <main className={classes.content} id="workSpaceID">
        {/* <UserProfile /> */}
        <Messeger />
      </main>
    </div>
  );
}

export default Workspace;

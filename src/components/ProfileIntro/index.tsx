import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

interface ProfileProps {
  avatar: string;
  firstName: string;
  lastName: string;
  status: string;
  date: string;
}

function ProfileIntro({ avatar, firstName, lastName, status, date }: ProfileProps) {
  const classes = useStyles();
  return (
    <div className={classes.profileIntroStyles}>
      <img src={avatar} alt="" className={classes.avatar} />
      <div className="razdelitel"></div>
      <section className={classes.sectionIntroProfile}>
        <Typography variant="h6" style={{ fontSize: 24 }}>
          {firstName}
        </Typography>
        <Typography variant="h6" style={{ fontSize: 24 }}>
          {lastName}
        </Typography>
        <Typography variant="h6" style={{ color: '#418ED6', fontSize: 13 }}>
          {status}
        </Typography>
        <Typography variant="h6" style={{ fontSize: 13 }}>
          {date}
        </Typography>
      </section>
    </div>
  );
}

export default ProfileIntro;

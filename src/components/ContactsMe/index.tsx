import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';

interface ContactMeProps {
  mailCont: string;
  numberCont: string;
  webSiteCont: string;
}

function ContactsMe({ mailCont, numberCont, webSiteCont }: ContactMeProps) {
  const classes = useStyles();
  return (
    <div className="wrapperContact">
      <ul>
        <li>
          <Typography style={{ color: '#074A87', fontSize: 15 }}>Mail:</Typography>
          <Typography style={{ color: '#418ED6' }}>{mailCont}</Typography>
        </li>
        <br />
        <li>
          <Typography style={{ color: '#074A87', fontSize: 15 }}>Number:</Typography>
          <Typography style={{ color: '#418ED6' }}>{numberCont}</Typography>
        </li>
        <br />
        <li>
          <Typography style={{ color: '#074A87', fontSize: 15 }}>Web-site:</Typography>
          <a href={webSiteCont}>
            <Typography style={{ color: '#418ED6' }}>{webSiteCont}</Typography>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactsMe;

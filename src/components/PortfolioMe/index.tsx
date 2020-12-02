import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../styles';
import portfolioBg from '../../assets/images/portfolio.png';

const listPortfolio = [
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },

  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
  {
    link: 'www.site.com',
    img: portfolioBg,
  },
];

function PortfolioMe() {
  const classes = useStyles();
  return (
    <div className="wrapperPortfolio">
      <ul>
        {listPortfolio.map((obj, index: number) => (
          <li key={`${obj}_${index}`} className="imagePortfolio">
            <a href={obj.link}>
              <img
                src={obj.img}
                alt=""
                style={{ width: 150, height: 100, marginLeft: 40, marginTop: 20, borderRadius: 5 }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioMe;

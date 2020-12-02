import React from 'react';
import { HeaderHome } from '..';
import useStyles from '../../styles';
import { ArticleIntro } from '..';
import BgNews from '../../assets/images/editProfBg.jpg';

const listArray = [
  {
    img: BgNews,
    title: 'Last news',
  },
  {
    img: BgNews,
    title: 'Last news',
  },
  {
    img: BgNews,
    title: 'Last news',
  },
  {
    img: BgNews,
    title: 'Last news',
  },
  {
    img: BgNews,
    title: 'Last news',
  },
];

function News() {
  const classes = useStyles();

  return (
    <div className={classes.wrapperMain} style={{ width: '100%', marginLeft: '50%' }}>
      <HeaderHome title="news" />
      {listArray.map((obj, index) => (
        <ArticleIntro img={obj.img} title={obj.title} />
      ))}
    </div>
  );
}

export default News;

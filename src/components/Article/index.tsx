import React from 'react';

interface articleProps {
  img: string;
  title: string;
}

function ArticleIntro({ img, title }: articleProps) {
  return (
    <div
      className="articleWrapper"
      style={{
        background: `url(${img})100% 100% no-repeat`,
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      {title}
    </div>
  );
}

export default ArticleIntro;

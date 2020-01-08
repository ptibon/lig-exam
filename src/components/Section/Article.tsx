import React from 'react';
import { ArticleItem } from '../../types/Article';

const ArticleList: React.FC<ArticleItem> = ({
  link,
  image,
  time,
  title,
  preview
}) => {
  return (
    <article className='article'>
      <a href={link}>
        <img src={image} alt='ArticleImage' className='article-image' />
        <div className='article-content'>
          <time className='article-date'>{time}</time>
          <h4 className='article-title'>{title}</h4>
          {preview ? <p className='article-preview'>{preview}</p> : null}
        </div>
      </a>
    </article>
  );
};

export default ArticleList;

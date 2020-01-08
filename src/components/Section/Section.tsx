import React from 'react';
import Article from './Article';
import contents from './ArticlesAPI';
import rightArrow from './images/right-arrow.png';

const Section: React.FC = () => {
  return (
    <section className='content'>
      {contents.map((content, index) => (
        <Article
          key={index}
          link={content.link}
          image={content.image}
          time={content.time}
          title={content.title}
          preview={content.preview}
        />
      ))}
      <footer className='content-articles-footer'>
        <a
          href='http://ii-office.jp/ueno-by-lig/'
          className='content-articles-footer-btn'
        >
          More
          <img
            src={rightArrow}
            alt='More Atricles Arrow'
            className='content-articles-arrow'
          ></img>
        </a>
      </footer>
    </section>
  );
};

export default Section;

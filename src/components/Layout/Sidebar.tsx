import React from 'react';
import dummyBanner1 from './images/dummy-banner-1.jpg';
import dummyBanner2 from './images/dummy-banner-2.jpg';
import contents from '../Section/ArticlesAPI';
import Article from '../Section/Article';
import DummyBanner from './DummyBanner';

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      <figure className='sidebar-dummy-banner'>
        <a href='https://ii-office.jp/ueno-by-lig/'>
          <img src={dummyBanner1} alt='DummyBanner 1' />
        </a>
      </figure>
      <section className='sidebar-recommended'>
        <h3>Recommended</h3>
        {contents.slice(0, 3).map((content, index) => (
          <Article
            key={index}
            link={content.link}
            image={content.image}
            time={content.time}
            title={content.title}
          />
        ))}
      </section>
      <DummyBanner bannerImg={dummyBanner2} altImg='DummyBanner 2' />
      <DummyBanner bannerImg={dummyBanner2} altImg='DummyBanner 3' />
      <DummyBanner bannerImg={dummyBanner2} altImg='DummyBanner 4' />
    </aside>
  );
};

export default Sidebar;

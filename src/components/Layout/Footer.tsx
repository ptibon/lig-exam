import React from 'react';
import arrowUp from './images/up-arrow.png';

const Footer: React.FC = () => {
  const scrollToTopController = () => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className='site-footer'>
      <aside className='site-footer-page-top'>
        <img
          src={arrowUp}
          alt='Arrow Page Up'
          onClick={scrollToTopController}
        />
      </aside>
      <nav className='nav'>
        <div className='nav-left'>
          <a href='https://ii-office.jp/ueno-by-lig/'>運営会社</a>
          <a href='https://ii-office.jp/ueno-by-lig/'>個人情報保護について</a>
        </div>
        <small className='nav-right'>©2016 Sample</small>
      </nav>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { DummyBannerItem } from '../../types/Sidebar';

const DummyBanner: React.FC<DummyBannerItem> = ({ bannerImg, altImg }) => {
  return (
    <figure className='sidebar-dummy-banner-sub'>
      <a href='https://ii-office.jp/ueno-by-lig/'>
        <img src={bannerImg} alt={altImg} />
      </a>
    </figure>
  );
};

export default DummyBanner;

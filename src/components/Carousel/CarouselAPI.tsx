import React from 'react';
import { CarouselItem } from '../../types/Carousel';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const CarouselAPI: CarouselItem[] = [
  {
    image: img1,
    title: 'キャッチコピーが入ります。',
    content: (
      <h4>
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />{' '}
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </h4>
    )
  },
  {
    image: img2,
    title: 'キャッチコピーが入ります。',
    content: (
      <h4>
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />{' '}
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </h4>
    )
  },
  {
    image: img3,
    title: 'キャッチコピーが入ります。',
    content: (
      <h4>
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />{' '}
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </h4>
    )
  },
  {
    image: img3,
    title: 'キャッチコピーが入ります。',
    content: (
      <h4>
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />{' '}
        サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
      </h4>
    )
  }
];

export default CarouselAPI;

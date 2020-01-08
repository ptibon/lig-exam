import React from 'react';
import items from './CarouselAPI';
import './carousel.css';
// import CarouselIndicator from './CarouselIndicator'
import CarouselInner from './CarouselInner';
import CarouselHolder from './CarouselHolder';

const Carousel: React.FC = () => {
  return (
    <CarouselHolder>
      {items.map((item, index) => (
        <CarouselInner key={index}>
          <div
            className='items'
            style={{
              backgroundImage: `url(${item.image})`
            }}
          >
            <div className='content'>
              <h2>{item.title}</h2>
              {item.content}
            </div>
          </div>
        </CarouselInner>
      ))}
    </CarouselHolder>
  );
};

export default Carousel;

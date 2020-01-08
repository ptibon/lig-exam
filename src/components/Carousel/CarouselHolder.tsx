import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import CarouselInner from './CarouselInner';
import rightArrow from './images/right-arrow.png';
import leftArrow from './images/left-arrow.png';
import disabledLeftArrow from './images/disabled-left-arrow.png';
import disabledRightArrow from './images/disabled-right-arrow.png';

const CarouselHolder: React.FC = ({ children }) => {
  const slides = React.Children.toArray(children);
  const length = slides.length;
  const [active, setActive, setNext, setPrev, style] = useCarousel(length);

  return (
    <div className='carousel'>
      <ol className='carousel-indicators'>
        {slides.map((_, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={`${
              active === index
                ? 'carousel-indicator active'
                : 'carousel-indicator'
            }`}
          />
        ))}
      </ol>

      <div className='carousel-content'>
        <div className='carousel-controls'>
          <button
            className='left-control'
            aria-label='Previous Slide'
            onClick={() => setPrev(length)}
            disabled={active === 0}
          >
            {active === 0 ? (
              <img src={disabledLeftArrow} alt='Disabled Left Arrow' />
            ) : (
              <img src={leftArrow} alt='Left Arrow' />
            )}
          </button>

          <button
            className='right-control'
            aria-label='Next Slide'
            onClick={() => setNext(length)}
            disabled={active === length - 1}
          >
            {active === length - 1 ? (
              <img src={disabledRightArrow} alt='Disabled Right Arrow' />
            ) : (
              <img src={rightArrow} alt='Right Arrow' />
            )}
          </button>
        </div>

        <div className='carousel-items' style={style}>
          {slides.map((slide, index) => (
            <CarouselInner key={index}>{slide}</CarouselInner>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselHolder;

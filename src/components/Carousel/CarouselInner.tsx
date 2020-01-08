import React from 'react';

interface CarouselInnerProps {}

export const CarouselInner: React.FC<CarouselInnerProps> = ({ children }) => (
  <div className='carousel-inner'>{children}</div>
);

export default CarouselInner;

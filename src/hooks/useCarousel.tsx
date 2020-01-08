import { useReducer, useEffect } from 'react';
import { CarouselState } from '../types/Carousel';
import { carouselReducer } from '../reducer/carouselReducer';

const transitionTime = 400;
const smooth = `transform ${transitionTime}ms ease`;

const initialCarouselState: CarouselState = {
  desired: 0,
  active: 0
};

export function useCarousel(
  length: number
): [
  number,
  (n: number) => void,
  (next: number) => void,
  (next: number) => void,
  React.CSSProperties
] {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'DONE' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${100 * length}%`,
    left: `-${state.active * 100}%`
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);

    const dir =
      (dist > length ? 1 : -1) * Math.sign(state.desired - state.active);

    const shift = ((100 * dir) / length) * dist;

    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  }

  return [
    state.active,
    n => dispatch({ type: 'GOTO', desired: n }),
    next => dispatch({ type: 'NEXT', length: next }),
    prev => dispatch({ type: 'PREV', length: prev }),
    style
  ];
}

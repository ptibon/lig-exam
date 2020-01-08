import { CarouselState, CarouselAction } from '../types/Carousel';

const previous = (length: number, current: number) => {
  return (current - 1 + length) % length;
};

const next = (length: number, current: number) => {
  return (current + 1) % length;
};

export const carouselReducer = (
  state: CarouselState,
  action: CarouselAction
): CarouselState => {
  switch (action.type) {
    case 'GOTO':
      return {
        ...state,
        desired: action.desired
      };
    case 'NEXT':
      return {
        ...state,
        desired: next(action.length, state.active)
      };
    case 'PREV':
      return {
        ...state,
        desired: previous(action.length, state.active)
      };
    case 'DONE':
      return {
        ...state,
        active: state.desired
      };
    default:
      return state;
  }
};

export interface CarouselItem {
  image: string;
  title: string;
  content: any;
}

export interface CarouselState {
  desired: number;
  active: number;
}

export interface CarouselNext {
  type: 'NEXT';
  length: number;
}

export interface CarouselPrevious {
  type: 'PREV';
  length: number;
}

export interface CarouselGoTo {
  type: 'GOTO';
  desired: number;
}

export interface CarouselDone {
  type: 'DONE';
}

export type CarouselAction =
  | CarouselGoTo
  | CarouselNext
  | CarouselPrevious
  | CarouselDone;

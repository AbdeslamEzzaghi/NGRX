import { createAction, props, Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);
export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);



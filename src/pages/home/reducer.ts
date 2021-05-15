import * as CONST from './constants';

const initState = 0;

export function home(state = initState, action: any) {
  switch (action.type) {
    case CONST.ADD:
      return state + 100;
    default:
      return state;
  }
}
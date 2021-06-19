import * as CONST from '../constants/home.constants';

export interface IHome {
  counter: number
}

const initState: IHome = {
  counter: 0
};

export const Home = (state: IHome = initState, action: any): IHome => {
  switch (action.type) {
    case CONST.ADD:
      const counter = state.counter + 100;
      return {...state, counter};
    default:
      return state;
  }
}
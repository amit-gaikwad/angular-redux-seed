import { CHANGE_CITY } from './action.type.constant';
export interface IAppState {
  city: string;
  lastUpdate: Date;
}
export const INITIAL_STATE: IAppState = {
  city: 'Pune',
  lastUpdate: new Date()
};
export function rootReducer(state, action) {
  switch (action.type) {
    case CHANGE_CITY:
      return {...state, city: action.payload, lastUpdate: new Date()};
      }
  return state;
}


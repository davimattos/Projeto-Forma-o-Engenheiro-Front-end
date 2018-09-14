import {List} from 'immutable';

export function signup(state = new List(),action){
  if(action.type === 'SIGNUP'){  
    return new List(action.valores);
  }
  return state;
}
import {List} from 'immutable';

export function signup(state = new List(),action){
  if(action.type === 'SIGNUP'){  
    return new List(action.valores);
  }
  return state;
}

export function notificar(state='',action){
  if(action.type === 'ALERT'){
    console.log(action.msg)
      return action.msg;
  }
  return state;
}
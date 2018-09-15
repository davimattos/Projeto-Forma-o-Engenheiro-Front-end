export function notificacao(state='',action){
    if(action.type === 'ALERT'){
        console.log(action.msg)
        return action.msg;
    }

    return state;
}
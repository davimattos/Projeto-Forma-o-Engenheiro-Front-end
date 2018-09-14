import { notifica, signup} from '../actions/actionCreator';
import {browserHistory} from  'react-router';

export default class SignupApi {

    static signup(valores){
        const requestInfo = {
            method:'POST',
            body:JSON.stringify({login:valores.login, senha:valores.senha, urlPerfil:valores.urlPerfil}),
            headers:new Headers({
                'Content-type' : 'application/json',
                'Auth-token' : ''
            })
        };
        return dispatch => {
            if(valores.login === valores.senha) {
                dispatch(notifica("Senha igual ao username"));
            } else if (valores.senha !== valores.confirma) {
                dispatch(notifica("Senha não confere"));
            } else {
                fetch(`http://localhost:8080/usuarios`, requestInfo)
                .then(response =>  {
                    if(response.ok) {
                        browserHistory.push('/timeline');
                    }
                    return response.json();
                })
                .then(data => {
                    data.errors.map( erro => {
                        dispatch(notifica(erro.defaultMessage));
                        return erro.defaultMessage
                    })
                })
                dispatch(signup(valores));
                return valores;
            }              
        }
    }
}
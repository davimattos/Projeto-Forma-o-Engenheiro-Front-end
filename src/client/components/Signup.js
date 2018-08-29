import React, { Component } from 'react';
import {browserHistory} from  'react-router';

export default class Signup extends Component {

    constructor(props){
        super(props);        
        this.state = {msg:this.props.location.query.msg};
    }
    //https://avatars3.githubusercontent.com/u/39676166?s=400&v=4
    envia(event){
        event.preventDefault();

        const requestInfo = {
            method:'POST',
            body:JSON.stringify({login:this.login.value,senha:this.senha.value,urlPerfil:this.urlPerfil.value}),
            headers:new Headers({
                'Content-type' : 'application/json',
                'Auth-token' : ''
            })
        };
        console.log(this.senha.value)
            if(this.senha.value === this.confirma.value) {
                fetch('http://localhost:8080/usuarios',requestInfo)
                    .then(response => {
                            if(response.ok) {
                                browserHistory.push('/timeline');
                            }
                        return response.json();
                    })
                    .then(data => {
                        data.errors.map( erro => {
                            throw new Error(erro.defaultMessage)
                        })
                    })
                    .catch(error => {
                        this.setState({msg:error.message});
                    });
            } else {
                this.setState({msg:"A senha e confirmação não batem"});
            }
        }

    render(){
        return (
            <div className="signup-box">
                <h1>Signup</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <p>Login</p>
                    <input type="text" ref={(input) => this.login = input} required/>
                    <p>Senha</p>
                    <input type="password" ref={(input) => this.senha = input} required/>
                    <p>Confirmação</p>
                    <input type="password" ref={(input) => this.confirma = input} required/>
                    <p>Url do Perfil</p>
                    <input type="url" pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$" placeholder="http://endereco.com" ref={(input) => this.urlPerfil = input}/>
                    <p></p>
                    <input type="submit" value="signup"/>
                </form>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupApi from '../logicas/SignupApi';

class Signup extends Component {
    
    constructor() {
        super();
        this.state = {msg:''};
    }
    
    //https://avatars3.githubusercontent.com/u/39676166?s=400&v=4
    
    signup(event){
        event.preventDefault();
        this.props.signup({login: this.login.value, senha: this.senha.value, confirma: this.confirma.value, urlPerfil: this.urlPerfil.value});        
    }
    
    render(){
        return (
            <div className="signup-box">
                <h1>Signup</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.signup.bind(this)}>
                    <p>Login</p>
                    <input type="text"  ref={(input) => this.login = input} required/>
                    <p>Senha</p>
                    <input type="password"  ref={(input) => this.senha = input} required/>
                    <p>Confirmação</p>
                    <input type="password"  ref={(input) => this.confirma = input} required/>
                    <p>Url do Perfil</p>
                    <input type="url"  pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$" placeholder="http://endereco.com" ref={(input) => this.urlPerfil = input}/>
                    <p></p>
                    <input type="submit" value="signup"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {valores : state.valores}
  };

const mapDispatchToProps = dispatch => {
    return {
        signup : (valores) => {
            dispatch(SignupApi.signup(valores));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
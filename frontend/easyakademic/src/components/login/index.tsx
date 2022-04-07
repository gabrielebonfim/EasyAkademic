import React from 'react';
import './index.css';

function Login() {
    return (
        <div className="card">
            <div className="card-body">
                <h3>Faça seu login</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Endereço de E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <small><a href="#">Esqueci minha senha</a></small>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
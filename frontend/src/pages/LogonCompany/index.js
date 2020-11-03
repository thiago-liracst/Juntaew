import React, {useState } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../service/api';

export default function LogonCompany(){
    
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login/company', {login, senha});
            if (response.data===true) {
                localStorage.setItem('login', login);
                history.push('/homecompany', login);
            }else{
                alert('Login ou senha inválidos!')
            }
        } catch (error) {
            alert("Falha no login, tente novmente.");
        }
    }

    return(

        <section className="form">
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input 
                    placeholder="Seu login" 
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input 
                    placeholder="Sua senha" 
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <div className="actions">
                    <button className="button" type="submit" >Entrar</button>

                    <Link className="back-link" to="/register/company" style={{fontSize: 15}}>
                        <FiLogIn size={30} color="#293f7b" />
                            Abrir cadastro
                    </Link>
                </div>
            
            </form>
        </section>
    )

}

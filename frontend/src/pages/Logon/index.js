import React, {useState } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../service/api';

export default function Logon(){
    
    const [nick, setNick] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', {nick, senha});
            if (response.data===true) {
                localStorage.setItem('login', nick);
                history.push('/homeuser', nick);
            }else{
                alert('Nick ou senha inválidos!')
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
                    placeholder="Seu nick" 
                    value={nick}
                    onChange={e => setNick(e.target.value)}
                />
                <input 
                    placeholder="Sua senha" 
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <div className="actions">
                    <button className="button" type="submit" >Entrar</button>

                    <Link className="back-link" to="/register" style={{fontSize: 15}}>
                        <FiLogIn size={30} color="#293f7b" />
                            Não tenho cadastro
                    </Link>
                </div>
            
            </form>
        </section>
    )
}

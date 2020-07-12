import React, {useState } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/DathApp.png';

import './styles.css';

export default function Logon(){
    
    const [nick, setNick] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            //const response = await api.post('sessions', { id });
            
            //localStorage.setItem('ongId', id);
            //localStorage.setItem('ongName', response.data.name);

            history.push('/homeuser');
        } catch (error) {
            alert("Falha no login, tente novmente.");
        }
    }

    return(
        <div className="container">
            <img src={logoImg} alt="DathApp" className="img"/>
            <section className="form">
            
                <form onSubmit={handleLogin}>
                    <h1 style={{marginLeft: 15 }}>Faça seu logon</h1>

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
                    <button className="button" type="submit" >Entrar</button>

                    <Link className="back-link" to="/register" style={{marginBottom: 30}}>
                        <FiLogIn size={40} color="#293f7b" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    )
}
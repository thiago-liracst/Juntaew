import React, { useState } from 'react';

import {Link, useHistory} from 'react-router-dom';

import logoImg from '../../assets/DathApp.png';

import './styles.css';

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            nick,
            senha,
        };

        try {
            //const response = await api.post('ongs', data);
            //alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
        
    }

    return(
        <div className="container">
            <img src={logoImg} alt="DathApp" className="img"/>

            <section className="form">
            
                <form onSubmit={handleRegister}>
                    <h1 style={{marginLeft: 15 }}>Faça seu cadastro</h1>

                    <input 
                        placeholder="Seu nome" 
                        value={name}
                        onChange={e => setNick(e.target.value)}
                    />
                    <input 
                        placeholder="Seu email" 
                        value={email}
                        onChange={e => setNick(e.target.value)}
                    />
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

                    
                </form>
            </section>
        </div>
    )
}
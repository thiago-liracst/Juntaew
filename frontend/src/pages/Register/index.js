import React, { useState } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';

export default function Register() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nick, setNick] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        if (senha===senha2) {
            const data = {
                nick,
                senha,
                nome,
                email,
            };
    
            try {
                const response = await api.post('/users', data);
                alert(response.data);
                history.push('/');
            } catch (error) {
                alert('Erro no cadastro, tente novamente.');
            }
        } else {
            alert('As senhas não se correspondem.');
        }
        
    }

    return(
        <>
            <Link className="back-link" to="/" style={{position: 'absolute', left: 2, top:15}}>
                <FiArrowLeft size={50} color="#FFF" />
            </Link>

            <section className="form">
                <form onSubmit={handleRegister}>
                    <h1 style={{marginLeft: 15 }}>Faça seu cadastro</h1>

                    <input 
                        placeholder="Seu nome" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        placeholder="Seu email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                    <input 
                        placeholder="Digite sua senha novamente" 
                        type="password"
                        value={senha2}
                        onChange={e => setSenha2(e.target.value)}
                    />
                    <button className="button" type="submit" >
                        Salvar
                    </button> 
                </form>
            </section>
        </>
    )
}
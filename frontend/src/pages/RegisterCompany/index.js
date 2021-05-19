import React, { useState } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../service/api';

export default function RegisterCompany() {
    
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [valor, setValor] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        if (senha===senha2) {
            const data = {
                nome,
                endereco,
                cidade,
                uf,
                valor,
                login,
                senha
            };

            try {
                const response = await api.post('/locais', data);
                if (response.data==="Sucess!") {
                    alert(response.data);
                    history.push('/');
                }else{
                    throw Error("Login já cadastrado.");
                }
                
            } catch (error) {
                alert(error.message);
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
                        placeholder="Nome do local" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        placeholder="Endereço do local" 
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                    />
                    <input 
                        placeholder="Cidade" 
                        value={cidade}
                        onChange={e => setCidade(e.target.value.toUpperCase())}
                    />
                    <input 
                        placeholder="UF" 
                        value={uf}
                        maxLength="2"
                        onChange={e => setUf(e.target.value.toUpperCase())}
                    />
                    <input 
                        placeholder="Valor em reais por hora" 
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />
                    <input 
                        placeholder="Digite seu novo login" 
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input 
                        placeholder="Digite sua senha"
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
import React, {useEffect, useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../service/api';

export default function HomeUser() {
    
    const [locais, setLocais] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('locais')
        .then(response => {
            setLocais(response.data);
        });
    }, []);

    async function handleHorarios(e, id) {
        e.preventDefault();

        try {
            localStorage.setItem('localID', id);
            history.push('/horarios');
        } catch (error) {
            alert("Falha, tente novmente.");
        }
    }

    return(
        <>
            <Link className="back-link" to="/" style={{position: 'absolute', left: 2, top:15}}>
                <FiArrowLeft size={50} color="#FFF" />
            </Link>
            <div className="container-list">
                <input 
                    placeholder="Pesquisar esporte"
                    onChange={()=>{}}
                    style={{
                        width: '89%',
                        height: 40,
                        maxWidth: 655,
                        borderRadius: 8,
                        marginBottom: 20,
                    }}
                />

                <section className="form">
                    <ul>
                        {locais.map(local => (
                            <li key={local.id}>
                                <strong>Local:</strong>
                                <p>{local.nome}</p>

                                <strong>Endereço:</strong>
                                <p>{local.endereco}, {local.cidade} - {local.uf}</p>

                                <strong>VALOR:</strong>
                                <p>R${local.valor}</p>

                                <div className="actions">
                                    <button onClick={(e)=>handleHorarios(e, local.id)} type="submit" className="button">
                                        Ver Horários
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}
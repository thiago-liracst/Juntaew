import React, {useEffect, useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

import './styles.css';

import api from '../../service/api';

export default function HomeUser() {
    
    const [locais, setLocais] = useState([]);

    const [search, setSearch]  = useState('');

    const history = useHistory();

    useEffect(() => {
        api.get('locais')
        .then(response => {
            setLocais(response.data);
        });
    }, []);

    const searchArray = (array, stringSearch) => {
        return array.filter((item) => {
            return item.nome.toUpperCase().match(stringSearch.toUpperCase());
        });
    }

    async function handleHorarios(e, local) {
        e.preventDefault();

        try {
            localStorage.setItem('local', local);
            history.push('/horarios');
        } catch (error) {
            alert("Falha, tente novmente.");
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <>
            <Link className="back-link" to="/" style={{position: 'absolute', left: 2, top:15}}>
                <FiArrowLeft size={50} color="#FFF" />
            </Link>

            <Link className="back-link" onClick={handleLogout} style={{position: 'absolute', right: 2, top:15}}>
                <AiOutlineLogout size={50} color="#FFF" />
            </Link>

            <div className="container-list">
                <input 
                    placeholder="Pesquisar local"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
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
                        {searchArray(locais, search).map(local => (
                            <li key={local.id}>
                                <strong>Local:</strong>
                                <p>{local.nome}</p>

                                <strong>Endereço:</strong>
                                <p>{local.endereco}, {local.cidade} - {local.uf}</p>

                                <strong>VALOR:</strong>
                                <p>R${local.valor}</p>

                                <div className="actions">
                                    <button onClick={(e)=>handleHorarios(e, local.login)} type="submit" className="button">
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
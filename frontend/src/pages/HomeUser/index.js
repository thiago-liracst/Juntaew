import React from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function HomeUser() {
    
    const history = useHistory();

    async function handleHorarios(e) {
        e.preventDefault();

        try {
            //const response = await api.post('sessions', { id });
            
            //localStorage.setItem('ongId', id);
            //localStorage.setItem('ongName', response.data.name);

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
                        <li>
                            <strong>Local:</strong>
                            <p>Ginásio O Zézão</p>

                            <strong>Endereço:</strong>
                            <p>Rua Zezinho do Pão</p>

                            <strong>VALOR:</strong>
                            <p>R$15,00</p>

                            <div className="actions">
                                <button onClick={handleHorarios} type="submit" className="button">
                                    Ver Horários
                                </button>
                            </div>
                        </li>

                        <li>
                            <strong>Local:</strong>
                            <p>Ginásio O Zézão</p>

                            <strong>Endereço:</strong>
                            <p>Rua Zezinho do Pão</p>

                            <strong>VALOR:</strong>
                            <p>R$15,00</p>

                            <div className="actions">
                                <button onClick={() => {}} type="submit" className="button">
                                    Ver Horários
                                </button>
                            </div>
                
                        </li>

                        <li>
                            <strong>Local:</strong>
                            <p>Ginásio O Zézão</p>

                            <strong>Endereço:</strong>
                            <p>Rua Zezinho do Pão</p>

                            <strong>VALOR:</strong>
                            <p>R$15,00</p>

                            <div className="actions">
                                <button onClick={() => {}} type="submit" className="button">
                                    Ver Horários
                                </button>
                            </div>
                        </li>

                        <li>
                            <strong>Local:</strong>
                            <p>Ginásio O Zézão</p>

                            <strong>Endereço:</strong>
                            <p>Rua Zezinho do Pão</p>

                            <strong>VALOR:</strong>
                            <p>R$15,00</p>

                            <div className="actions">
                                <button onClick={() => {}} type="submit" className="button">
                                    Ver Horários
                                </button>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}
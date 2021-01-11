import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

import api from '../../service/api';

export default function Vaga() {

    const [evento, setEvento] = useState({});

    const history = useHistory();
    
    useEffect(() => {
        try {

            const idEvento = localStorage.getItem('evento');

            api.post('getEvento', {idEvento})
            .then(response => {
                setEvento(response.data);
            });
        } catch (error) {
            alert(error);
        }
      }, []);

      function handleLogout(){
        localStorage.clear();
        history.push('/');
      }

    return(
        <>
            <Link className="back-link" to="/horarios" style={{position: 'absolute', left: 2, top:15}}>
                <FiArrowLeft size={50} color="#FFF" />
            </Link>

            <Link className="back-link" onClick={handleLogout} style={{position: 'absolute', right: 2, top:15}}>
                <AiOutlineLogout size={50} color="#FFF" />
            </Link>

            <section className="form">
                <form>
                    <h1>Detalhes do evento</h1>
                    <h5>Nome</h5>
                    <input  
                        value={evento.nome}
                        disabled={true}
                    />
                    
                    <h5>Data</h5>
                    <input 
                        value={evento.dia+"/"+evento.mes}
                        disabled={true}
                    />

                    <h5>Horário</h5>
                    <input 
                        value={"Das "+evento.inicio+" às "+evento.fim}
                        disabled={true}
                    />

                    <h5>Tipo</h5>
                    <input 
                        style={{marginBottom: 20}}
                        value={evento.esporte}
                        disabled={true}
                    />

                    <h5>Total de Vagas</h5>
                    <input 
                        style={{marginBottom: 20}}
                        value={evento.totalVagas}
                        disabled={true}
                    />

                    <h5>Total de Vagas</h5>
                    <input 
                        style={{marginBottom: 20}}
                        value={evento.disponiveis}
                        disabled={true}
                    />
                </form>

            </section>
        </>
    )

    {
        /*
            <section className="form">

                <form>
                    <h1>Participantes</h1>

                    <input  
                        value={"Fulano"}
                        disabled={true}
                    />
                    
                    <input  
                        value={"Ciclano"}
                        disabled={true}
                    />

                    <input 
                        style={{marginBottom: 20}}
                        value={"Beltrano"}
                        disabled={true}
                    />
                </form>

            </section>
        */
    }
}
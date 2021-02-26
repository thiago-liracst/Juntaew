import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

import api from '../../service/api';

import './styles.css';

export default function Vaga() {

    const [evento, setEvento] = useState({});

    const textAreaRef = useState('Olaaa camarada');

    const history = useHistory();

    const [url, setUrl] = useState('');

    let idEvento = window.location.search.substring(1);
    
    useEffect(() => {
        try {

            if (idEvento==='') {
                idEvento = localStorage.getItem('evento');
            }

            api.post('getEvento', {idEvento})
            .then(response => {
                setEvento(response.data);
                setUrl("http://www.juntae.net/vaga?"+idEvento)
            });
        } catch (error) {
            alert(error);
        }
      }, []);

      async function handleCompartilar(e, idEvent) {
        e.preventDefault();
    
        try {
            setUrl("http://www.juntae.net/vaga?"+idEvento)
            textAreaRef.current.select();
            document.execCommand('copy');
            // This is just personal preference.
            // I prefer to not show the the whole text area selected.
            e.target.focus();
            alert("Copied!")
        } catch (error) {
            alert("Erro: ", error);
        }
      }
    
      async function handlePreencher(e, idEvento, disponiveis){
        e.preventDefault();
    
        if (disponiveis>0) {
          try {
            api.post('/preencherVaga', {
              idEvento,
              disponiveis
            });
            window.location.reload();
          } catch (error) {
            alert("Erro: "+error);
          }
        } else {
          alert("Todas as vagas preenchidas!")
        }
        
      }

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

                    <h5>Vagas Disponíveis</h5>
                    <input 
                        style={{marginBottom: 20}}
                        value={evento.disponiveis}
                        disabled={true}
                    />

                    <div className="buttons">
                        <button className="buttonPreencher" onClick={(e) => handlePreencher(e, evento.id, evento.disponiveis)} type="submit">
                            Preencher Vaga
                        </button>

                        {
                        /* Logical shortcut for only displaying the 
                            button if the copy command exists */
                        document.queryCommandSupported('copy') &&
                            <div>
                                <button className="buttonDetalhes" onClick={handleCompartilar}>Compartilhar</button> 
                            </div>
                        }
                    </div>

                    <form>
                        <textarea
                            ref={textAreaRef}
                            className="areaText"
                            value={url}
                        />
                    </form>

                </form>

            </section>
        </>
    )
}
import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

import { Carousel } from 'react-bootstrap';

import api from '../../service/api';

export default function Horarios() {

  const [nome, setNome] = useState("")
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [esporte, setEsporte] = useState("");
  const [totalVagas, setTotalVagas] = useState("");

  const [horarios, setHorarios] = useState([]);

  const local = localStorage.getItem('localID');
  const history = useHistory();

  useEffect(() => {
    api.get('horarios')
      .then(response => {
          setHorarios(response.data.filter(horario => horario.local === localStorage.getItem('localID')));
      });

  }, []);

  async function handleMarcarHorario(e){
    e.preventDefault();

    try {
      api.post('/evento', {
        nome: nome,
        dia: dia,
        mes: mes,
        inicio: inicio,
        fim: fim,
        esporte: esporte,
        totalVagas: totalVagas,
      });
      window.location.reload();
    } catch (error) {
      alert("Erro: "+error);
    }
  }

  async function handleDetalhes(e) {
    e.preventDefault();

    try {
        history.push('/vaga', local);
    } catch (error) {
        alert("Falha no login, tente novmente.");
    }
  }

  return (
    <>
      <Link className="back-link" to="/homeuser" style={{position: 'absolute', left: 2, top:15}}>
        <FiArrowLeft size={50} color="#FFF" />
      </Link>
      
      <div className="container-horarios">
        <Carousel>
          <Carousel.Item>
            <div className="dia">
              <h3>Segunda</h3>
              <ul>
                <li>
                  7:00 às 9:00
                </li>
                <li>
                  9:00 às 11:00
                </li>
                <li>
                  13:00 às 15:00
                </li>
                <li>
                  15:00 às 17:00
                </li>
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Terça</h3>
              <ul>
                <li>
                  7:00 às 9:00
                </li>
                <li>
                  9:00 às 11:00
                </li>
                <li>
                  13:00 às 15:00
                </li>
                <li>
                  15:00 às 17:00
                </li>
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Quarta</h3>
              <ul>
                <li>
                  7:00 às 9:00
                </li>
                <li>
                  9:00 às 11:00
                </li>
                <li>
                  13:00 às 15:00
                </li>
                <li>
                  15:00 às 17:00
                </li>
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Quinta</h3>
              <ul>
                <li>
                  7:00 às 9:00
                </li>
                <li>
                  9:00 às 11:00
                </li>
                <li>
                  13:00 às 15:00
                </li>
                <li>
                  15:00 às 17:00
                </li>
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Sexta</h3>
              <ul>
                <li>
                  7:00 às 9:00
                </li>
                <li>
                  9:00 às 11:00
                </li>
                <li>
                  13:00 às 15:00
                </li>
                <li>
                  15:00 às 17:00
                </li>
              </ul>
            </div>
          </Carousel.Item>

        </Carousel>

        <form onSubmit={handleMarcarHorario} className="marcarHorario">
          <h1 style={{marginLeft: 15 }}>Marcar Horário</h1>

          <h5>Nome do evento</h5>
          <input 
            placeholder="Pelada valendo coca"
            onChange={(e) => setNome(e.target.value)}
          />

          <div className="diames">
            <div className="diadiv">
              <h5>Dia</h5>
              <input 
                placeholder="00"
                onChange={e => setDia(e.target.value)}
              />
            </div>
            <div className="mesdiv">
              <h5>Mês</h5>
              <input 
                placeholder="00"
                onChange={e => setMes(e.target.value)}
              />
            </div>
          </div>
          
          <h5>Início</h5>
          <input 
            placeholder="8"
            onChange={e => setInicio(e.target.value)}
          />

          <h5>Fim</h5>
          <input 
            placeholder="10"
            onChange={e => setFim(e.target.value)}
          />

          <h5>Tipo de esporte</h5>
          <input 
            placeholder="Futebol"
            onChange={(e) => setEsporte(e.target.value)}
          />

          <h5>Quantidade de Vagas</h5>
          <input 
            placeholder="15"
            onChange={(e) => setTotalVagas(e.target.value)}
          />
        
          <button className="button" type="submit" >
            Marcar
          </button>
              
        </form>

        <div className="listarHorarios">
          <h3>Reservados</h3>

          <div className="reservado">
            <h4>Dia 14</h4>
            <h5>Das 9:00 às 11:00</h5>
            <h5>2/10 Vagas disponíveis</h5>
            
            <div className="buttons">
              <button className="buttonPreencher" onClick={() => {}} type="submit">
                Preencher Vaga
              </button>
              <button className="buttonDetalhes" onClick={handleDetalhes} type="submit">
                Mais Detalhes
              </button>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
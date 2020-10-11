import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

import { Carousel } from 'react-bootstrap';

import api from '../../service/api';

export default function Horarios() {

  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);

  const [horarios, setHorarios] = useState([]);
  const local = localStorage.getItem('localID');
  const history = useHistory();

  useEffect(() => {
    api.get('horarios')
    .then(response => {
        setHorarios(response.data.filter(horario => horario.local === localStorage.getItem('localID')));
    });
  }, []);

  async function handleDetalhes(e) {
    e.preventDefault();

    try {
        history.push('/vaga');
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

        <form onSubmit={() => {}} className="marcarHorario">
          <h1 style={{marginLeft: 15 }}>Marcar Horário</h1>

          <h5>Nome</h5>
          <input 
            placeholder="Nome do evento"
            value={"Pelada valendo Coca"}
            onChange={() => {}}
          />

          <div className="diames">
            <div className="diadiv">
              <h5>Dia</h5>
              <input 
                placeholder="00" 
                value={dia}
                onChange={e => setDia(e.target.value)}
              />
            </div>
            <div className="mesdiv">
              <h5>Mês</h5>
              <input 
                placeholder="00" 
                value={mes}
                onChange={e => setMes(e.target.value)}
              />
            </div>
          </div>
          
          <h5>Horário</h5>
          <input 
            placeholder="00" 
            value={mes}
            onChange={e => setMes(e.target.value)}
          />

          <h5>Tipo de esporte</h5>
          <input 
            //placeholder="Nome do evento"
            value={"Futebol"}
            onChange={() => {}}
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
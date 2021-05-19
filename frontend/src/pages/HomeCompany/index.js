import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

import { Carousel } from 'react-bootstrap';

import api from '../../service/api';

export default function HomeCompany() {

  const [dia, setDia] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");


  const [eventos, setEventos] = useState([]);
  const [horarios, setHorarios] = useState([]);

  const local = localStorage.getItem('login');
  const history = useHistory();

  useEffect(() => {
    api.post('reservados', {local:local})
        .then(response => {
            setEventos(response.data);
        });
  }, []);

  useEffect(() => {
    api.post('horariosLocal', {local:localStorage.getItem('login')})
        .then(response => {
            setHorarios(response.data);
        });
  }, []);

  async function handleCriarHorario(e){
    e.preventDefault();

    try {
      api.post('/horarios', {
        local: localStorage.getItem('login'),
        dia: dia,
        inicio: parseInt(inicio),
        fim: parseInt(fim)
      });
      window.location.reload();
    } catch (error) {
      alert("Erro: "+error);
    }
  }

  async function handleDetalhes(e, idEvento) {
    e.preventDefault();

    console.log(idEvento);

    try {
        localStorage.setItem('evento', idEvento);
        history.push('/vaga');
    } catch (error) {
        alert("Falha no login, tente novmente.");
    }
  }

  async function handlePreencher(e, idEvento, disponiveis){
    e.preventDefault();

    try {
      api.post('/preencherVaga', {
        idEvento,
        disponiveis
      });
      window.location.reload();
    } catch (error) {
      alert("Erro: "+error);
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <Link className="back-link" to="/homeuser" style={{position: 'absolute', left: 2, top:15}}>
        <FiArrowLeft size={50} color="#FFF" />
      </Link>

      <Link className="back-link" onClick={handleLogout} style={{position: 'absolute', right: 2, top:15}}>
        <AiOutlineLogout size={50} color="#FFF" />
      </Link>
      
      <div className="container-horarios">
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="dia">
              <h3>Segunda</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Segunda") {
                    return <li>{horario.inicio}:00 as {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Terça</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Terca") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Quarta</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Quarta") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Quinta</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Quinta") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Sexta</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Sexta") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Sábado</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Sabado") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="dia">
              <h3>Domingo</h3>
              <ul>
                {horarios.map((horario) => {
                  if (horario.dia==="Domingo") {
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
                  }
                })}
              </ul>
            </div>
          </Carousel.Item>

        </Carousel>

        <form onSubmit={handleCriarHorario} className="marcarHorario">
          <h1 style={{marginLeft: 15 }}>Criar Horário</h1>

          <h5>Dia</h5>
          <input 
            placeholder="Dia da semana"
            onChange={(e) => setDia(e.target.value)}
          />
          
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
        
          <button className="button" type="submit" >
            Criar
          </button>
              
        </form>

        <div className="listarHorarios">
          <h3>Reservados</h3>
          {eventos.map((evento) => (
          <div className="reservado">
            <h4>Dia {evento.dia}</h4>
            <h5>Das {evento.inicio}:00 às {evento.fim}:00</h5>
          <h5>{evento.disponiveis}/{evento.totalVagas} Vagas disponíveis</h5>
            
            <div className="buttons">
              <button className="buttonPreencher" onClick={(e) => handlePreencher(e, evento.id, evento.disponiveis)} type="submit">
                Preencher Vaga
              </button>
              <button className="buttonDetalhes" onClick={(e) => handleDetalhes(e, evento.id)} type="submit">
                Mais Detalhes
              </button>
            </div>
          </div>
          ))}
        </div>
      </div> 
    </>
  );
}
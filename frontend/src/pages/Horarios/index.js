import React, { useState, useEffect } from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

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

  const [eventos, setEventos] = useState([]);
  const [horarios, setHorarios] = useState([]);

  const [segunda, setSegunda] = useState([]);
  const [terca, setTerca] = useState([]);
  const [quarta, setQuarta] = useState([]);
  const [quinta, setQuinta] = useState([]);
  const [sexta, setSexta] = useState([]);
  const [sabado, setSabado] = useState([]);
  const [domingo, setDomingo] = useState([]);

  const localId = localStorage.getItem('localID');
  const history = useHistory();

  useEffect(() => {
    api.get('evento')
        .then(response => {
            setEventos(response.data);
        });
  }, []);

  useEffect(() => {
    api.post('horariosLocal', {id_local:localStorage.getItem('localID')})
        .then(response => {
            setHorarios(response.data);
        });
  }, []);

  async function handleMarcarHorario(e){
    e.preventDefault();

    try {
      api.post('/evento', {
        criador: localStorage.getItem('login').toString(),
        local: parseInt(localId),
        nome: nome,
        dia: parseInt(dia),
        mes: parseInt(mes),
        inicio: parseInt(inicio),
        fim: parseInt(fim),
        esporte: esporte,
        totalVagas: parseInt(totalVagas),
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
                    return <li>{horario.inicio}:00 às {horario.fim}:00</li>
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
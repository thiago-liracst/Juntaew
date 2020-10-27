import React from 'react';

import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Vaga() {

    //const history = useHistory();

    return(
        <>
            <Link className="back-link" to="/horarios" style={{position: 'absolute', left: 2, top:15}}>
                <FiArrowLeft size={50} color="#FFF" />
            </Link>
            <section className="form">
                <form>
                    <h1>Detalhes do evento</h1>
                    <h5>Nome</h5>
                    <input  
                        value={"Pelada valendo Coca"}
                        disabled={true}
                    />
                    
                    <h5>Data</h5>
                    <input 
                        value={"03/07"}
                        disabled={true}
                    />

                    <h5>Horário</h5>
                    <input 
                        value={"07:09"}
                        disabled={true}
                    />

                    <h5>Tipo</h5>
                    <input 
                        style={{marginBottom: 20}}
                        value={"Futebol"}
                        disabled={true}
                    />
                </form>

            </section>

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
        </>
    )
}
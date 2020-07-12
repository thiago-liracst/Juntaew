import React from 'react';

import logoImg from '../../assets/DathApp.png';

import './styles.css';

export default function HomeUser() {
    return(
        <div className="container-list">
            <img src={logoImg} alt="DathApp" className="img"/>
            <section className="form">
                <ul>
                    <li>
                        <strong>Local:</strong>
                        <p>Ginásio O Zézão</p>

                        <strong>Endereço:</strong>
                        <p>Rua Zezinho do Pão</p>

                        <strong>VALOR:</strong>
                        <p>R$15,00</p>

                        <button onClick={() => {}} type="submit" className="button">
                            Ver Horários
                        </button>
                    </li>

                    <li>
                        <strong>Local:</strong>
                        <p>Ginásio O Zézão</p>

                        <strong>Endereço:</strong>
                        <p>Rua Zezinho do Pão</p>

                        <strong>VALOR:</strong>
                        <p>R$15,00</p>

                        <button onClick={() => {}} type="submit" className="button">
                            Ver Horários
                        </button>
                    </li>

                    <li>
                        <strong>Local:</strong>
                        <p>Ginásio O Zézão</p>

                        <strong>Endereço:</strong>
                        <p>Rua Zezinho do Pão</p>

                        <strong>VALOR:</strong>
                        <p>R$15,00</p>

                        <button onClick={() => {}} type="submit" className="button">
                            Ver Horários
                        </button>
                    </li>

                    <li>
                        <strong>Local:</strong>
                        <p>Ginásio O Zézão</p>

                        <strong>Endereço:</strong>
                        <p>Rua Zezinho do Pão</p>

                        <strong>VALOR:</strong>
                        <p>R$15,00</p>

                        <button onClick={() => {}} type="submit" className="button">
                            Ver Horários
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    )
}
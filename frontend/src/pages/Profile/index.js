import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from "../../assets/logo.svg";

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E020041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                
               {incidents.map(incidents => (
                   /* Map é uma repetição
                      Toda vez que fazemos uma interação, repetição (map) o primeiro item, elemento que vem logo dentro da repetição (Map)                   //
                      Precisamos colocar uma propriedade chamada Key
                      Key: vai ajudar o React a encontrar qual é qual na hora que precisar deletar algum item da interface
                      Modificar, trocar de posição
                      Na Key precisamos colocar qual o valor unico que identifica cada incidente*/
                    <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incidents.value)}</p>

                    <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                    </li>
               ))}
            </ul>
        </div>
    );
}
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    //Para redirecionar para pagina raiz após fazer o cadastro
    const history = useHistory();

    //Função responsavel por fazer o cadastro do usuario
    //Função recebe como parametro o evento de submite do formulario
    async function handleRegister(e) {
        //Previne o comportamento padrão da pagina que é recarregar a pagina assim que envia o cadastro por exemplo
        e.preventDefault();

       const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
       };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu Id de acesso: ${response.data.id}`);

            //Redireciona para pagina raiz após fazer o cadastro da ONG
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para o Logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        /*e.target.value = representa o valor do input e estou colocando dentro da variavel name que estamos armazenadmo no estado
                        e => setName(e.target.value) nada mais é do que uma função no formato reduzido*/
                        onChange={e => setName(e.target.value)}

                    />

                    <input 
                        type="e-mail" 
                        placeholder="E-mail" 
                        value={email}                        
                        onChange={e => setEmail(e.target.value)}    
                    />

                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}                        
                        onChange={e => setWhatsapp(e.target.value)}        
                    />

                    <div className="input-group"> 
                        <input 
                            placeholder="Cidade" 
                            value={city}                        
                            onChange={e => setCity(e.target.value)}   
                        />
                        
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}                        
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
 }
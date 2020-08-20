import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

export default function Routes() {
    return (
        //Precisa estar por volta de tudo
        <BrowserRouter>
            {/*Permite que apenas uma rota seja chamada por vez
            Mesmo que o caminho seja semelhante, nunca vai chamar mais de uma rota*/}
            <Switch>
                {/*Path é o caminho que vamos usar para acessar a rota
                Exact quer dizer que tem que ser exatamente assim o caminho*/}
                <Route path="/" exact component={Logon}/> 
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncidents}/>
            </Switch>    
        </BrowserRouter>
    );
}

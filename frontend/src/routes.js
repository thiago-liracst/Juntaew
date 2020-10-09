import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import HomeUser from './pages/HomeUser';
import Horarios from './pages/Horarios';
import Vaga from './pages/Vaga';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register} />
                <Route path="/homeuser" component={HomeUser} />
                <Route path="/horarios" component={Horarios} />
                <Route path="/vaga" component={Vaga} />
            </Switch>
        </BrowserRouter>
    )
}
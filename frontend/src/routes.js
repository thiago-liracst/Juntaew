import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import LogonCompany from './pages/LogonCompany';
import Register from './pages/Register';
import RegisterCompany from './pages/RegisterCompany';
import HomeUser from './pages/HomeUser';
import HomeCompany from './pages/HomeCompany';
import Horarios from './pages/Horarios';
import Vaga from './pages/Vaga';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/company" component={LogonCompany} />
                <Route path="/register" exact component={Register} />
                <Route path="/register/company" exact component={RegisterCompany} />
                <Route path="/homeuser" exact component={HomeUser} />
                <Route path="/homecompany" exact component={HomeCompany} />
                <Route path="/horarios" component={Horarios} />
                <Route path="/vaga" component={Vaga} />
            </Switch>
        </BrowserRouter>
    )
}
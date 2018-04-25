import React from 'react';
import {Switch, Route } from 'react-router-dom';
import base from '../Components/default/default';
import Home from '../Components/Home/Home';
import login from '../Components/Login/Login';
import basic from '../Components/Home/Create/Basic/Basic';
import skill from '../Components/Home/Create/Skill/Skill';
import spell from '../Components/Home/Create/Magic/Magic';
import done from '../Components/Home/Create/Done/Done';


export default (
    <Switch>
        <Route exact path ='/' component={base}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/login' component={login}></Route>
        <Route path='/basic' component={basic}></Route>
        <Route path='/skill' component={skill}></Route>
        <Route path='/spell' component={spell}></Route>
        <Route path='/done' component={done}></Route>
    </Switch>
)
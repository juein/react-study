import React from 'react';
//해쉬라우터(HashRouter) '#' 는 서버에 값을 전송하지 않기위해 사용
//import {HashRouter as Router, Route } from 'react-router-dom';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import List from 'Routes/List';
import Search from 'Routes/Search';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list/test" render={ () => console.log('test') } />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)

// route path : 어느 url에서 해당 route를 렌더(불러오기)할지 경로설정
// Component : 해당 route에서 어떤 컴포넌트가 보여지는지
// render : 컴포넌트가 아닌 함수를 렌더할 수 있다.
// exact : / 경로에 컴포넌트를 매칭. exact값이 없으면 다른 경로에서도 '/' 경로값이 보여진다.
// Redirect : 일치하는 경로가 없을 경우 리다이렉트 할 경로, from에 조건을, to에 경로 설정.
// Switch : route와 redirect가 겹쳐지지않게 하나의 route만 렌더하게 해준다.
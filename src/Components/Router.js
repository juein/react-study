import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Routes/Home';
import List from 'Routes/List';
import Search from 'Routes/Search';

export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={List} />
            <Route path="/search" exact component={Search} />
        </>
    </Router>
)

// route path : 어느 url에서 해당 route를 렌더할지 알려줌
// Component : 해당 route에서 어떤 컴포넌트가 보여지는지
// exact : / 경로에 컴포넌트를 매칭. exact값이 없으면 다른 경로에서도 '/' 경로값이 보여진다.
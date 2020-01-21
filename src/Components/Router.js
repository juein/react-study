import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from 'Component/Home';

export default () => (
    <Router>
        <Route path="/" exact Component={Home} />
    </Router>
)

// route path : 어느 url에서 해당 route를 렌더할지 알려줌
// Component : 해당 route에서 어떤 컴포넌트가 보여지는지
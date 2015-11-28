import './stylesheets/main.css';
import React from 'react';
import { render } from 'react-dom';
import App from './src/components/app';
import { Router, Route, Link } from 'react-router';

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';

    document.body.appendChild(shell);
    render((
        <Router>
            <Route path="/" component={App}/>
        </Router>
    ), shell);
}

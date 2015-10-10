import './stylesheets/main.css';
import React from 'react';
import Hello from './src/components/hello';

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    React.render(<Hello />, shell);
}

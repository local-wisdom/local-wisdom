import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app';

// init shell
renderShell();

function renderShell() {
    let googleMapsScript = document.createElement('script'),
        shell = document.createElement('div');

    googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js';
    shell.className = 'app-shell';

    document.body.appendChild(shell);
    document.body.appendChild(googleMapsScript);

    googleMapsScript.onload = () => { onGoogleReady(shell) };

}


function onGoogleReady(shell){
    console.info('Google Maps API ready');
    ReactDOM.render(<App />, shell);
}

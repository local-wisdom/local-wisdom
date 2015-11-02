import React from 'react';
import Nav from './nav/nav.jsx';
import Map from './map/map.jsx';

class App extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
  }

  render() {
    return (
        <main role='container'>
            <Nav />
            <Map />
        </main>
    );
  }
}

export default App;

import React from 'react';
import Nav from './nav/nav.jsx';
import Map from './map/map.jsx';
import API from '../util/api';

class App extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        authors: []
    }
  }

  componentDidMount(){
      this.getAuthors();
  }

  getAuthors() {
      console.log('Called');
      API.getAll('authors').then(response => { this.setState({authors: response})});
  }

  render() {
    return (
        <main role='container'>
            <Nav />
            <Map authors={ this.state.authors } />
        </main>
    );
  }
}

export default App;

import React from 'react';

const pandaImg = require('../../images/panda.png');

class Panda extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        showHelp: false
    }
  }

  componentDidMount(){
  }

  onClicked(){
      this.setState({showHelp: !this.state.showHelp })
  }

  render() {
    return (
        <div className='panda' onClick={ this.onClicked.bind(this) }>
            <div className={`panda-help-message ${ this.state.showHelp ? 'show' : 'hide' }`}>
                <h3>What is local wisdom</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={pandaImg} />
        </div>
    );
  }
}

export default Panda;

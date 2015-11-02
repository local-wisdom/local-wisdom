import React from 'react';

import lwLogo from '../../images/logo.png';

class Nav extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
        <nav>
            <div className='nav__logo' style={{backgroundImage: `url(${ lwLogo })`}}></div>
        </nav>
    );
  }
}

export default Nav;

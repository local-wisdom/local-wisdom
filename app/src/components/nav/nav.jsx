import React from 'react';
import NavItem from './nav-item';
import lwLogo from '../../images/logo_white.png';

class Nav extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        if( !this.props.items ){
            return (
                <nav>
                    <div className='nav__logo' style={{backgroundImage: `url(${ lwLogo })`}}></div>
                </nav>
            );
        }else {
            let items = this.props.items.map(item => {
                return <NavItem item={ item }/>
            });
            return (
                <nav>
                    <div className='nav__logo' style={{backgroundImage: `url(${ lwLogo })`}}>
                        { items }
                    </div>
                </nav>
            );
        }
    }
}

export default Nav;

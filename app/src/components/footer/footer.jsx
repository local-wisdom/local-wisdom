import React from 'react';
import Filter from './filter';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        tags: [
            'all',
            'food',
            'drink',
            'fashion',
            'design',
            'events'
        ],
        mobile_menu_active: window.innerWidth < 756 ? false : true
    };
  }

  componentDidMount(){
  }

  onMobileFilterMenuClick(){
      this.setState({
          mobile_menu_active: !this.state.mobile_menu_active
      });
  }

  render() {
    return (
        <div className='footer' style={{ 'height': this.state.mobile_menu_active ? 'auto' : '0px'}}>
            <div className='mobile_trigger' onClick={this.onMobileFilterMenuClick.bind(this)}>{this.state.mobile_menu_active ? 'close' : 'open'}</div>
            <Filter items={this.state.tags}
                    onFilterChange={this.props.onFilterChange.bind(this)}/>
        </div>
    );
  }
}

export default Footer;

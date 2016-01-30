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
      window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize );
  }

  handleResize(){
      this.setState({mobile_menu_active: window.innerWidth < 756 ? false : true });
  }

  onMobileFilterMenuClick(){
      this.setState({
          mobile_menu_active: !this.state.mobile_menu_active
      });
  }

  render() {
    return (
        <div className='footer' style={{ 'height': this.state.mobile_menu_active ? 'auto' : '0px'}}>
            <div className={`mobile_trigger ${this.state.mobile_menu_active ? 'entypo-down-open-big' : 'entypo-up-open-big'}`}
                 onClick={this.onMobileFilterMenuClick.bind(this)}/>
            <Filter items={this.state.tags}
                    onFilterChange={this.props.onFilterChange.bind(this)}/>
        </div>
    );
  }
}

export default Footer;

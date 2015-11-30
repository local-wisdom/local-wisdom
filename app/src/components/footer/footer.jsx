import React from 'react';
import Filter from './filter';
import FilterItem from './filter-item';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {}
  }

  componentDidMount(){
  }

  onClicked(){
      this.props.onClick();
  }

  render() {
    return (
        <div className='footer'>
            <Filter>
                <FilterItem tag='all' />
                <FilterItem tag='food' />
                <FilterItem tag='drink' />
                <FilterItem tag='fashion' />
                <FilterItem tag='design' />
                <FilterItem tag='events' />
            </Filter>
        </div>
    );
  }
}

export default Footer;

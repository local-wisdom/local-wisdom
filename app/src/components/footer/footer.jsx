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
        ]
    };
  }

  componentDidMount(){
  }

  render() {
    return (
        <div className='footer'>
            <Filter items={this.state.tags}
                    onFilterChange={this.props.onFilterChange.bind(this)}/>
        </div>
    );
  }
}

export default Footer;

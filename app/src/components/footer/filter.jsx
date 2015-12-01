import React from 'react';
import FilterItem from './filter-item';

class Filter extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        active_tag: 'all'
    }
  }

  componentDidMount(){
  }

  onClicked(){
      this.props.onClick();
  }

  onFilterSelected(filter){
      this.setState({
          active_tag: filter
      });
      this.props.onFilterChange(filter);
  }

  render() {
      let items = this.props.items.map(item => {
          return(<FilterItem tag={item}
                             isActive={ item === this.state.active_tag }
                             onClick={ this.onFilterSelected.bind(this)} />);
      });
      return (
        <div className='filter'>
            {items}
        </div>
    );
  }
}

export default Filter;

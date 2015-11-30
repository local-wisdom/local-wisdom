import React from 'react';

class FilterItem extends React.Component {

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
        <div className='filter-item button' onClick={ this.props.onClick }>
            {this.props.tag}
        </div>
    );
  }
}

export default FilterItem;

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
      this.props.onClick(this.props.tag);
  }

  render() {
    return (
        <div className={`filter-item button ${this.props.isActive ? 'active' : ''}`} onClick={ this.onClicked.bind(this) }>
            {this.props.tag}
        </div>
    );
  }
}

export default FilterItem;

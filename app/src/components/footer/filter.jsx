import React from 'react';

class Filter extends React.Component {

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
        <div className='filter' onClick={ this.props.onClick }>
            {...this.props.childeren}
        </div>
    );
  }
}

export default Filter;

import React from 'react';

class Button extends React.Component {

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
        <div className='button' onClick={ this.props.onClick }>
            {this.props.title}
        </div>
    );
  }
}

export default Button;

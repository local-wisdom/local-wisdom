import React from 'react';
import Author from './author';

class Post extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {}
  }

  componentDidMount(){
  }

  render() {
    let post = this.props.post;
    return (
        <div className='post'>
            <div className='post-close' onClick={ this.props.onClose.bind(this) }>×</div>
            <Author post={ post }/>
            <h1>{post.title}</h1>
            <div className='post-body' dangerouslySetInnerHTML={{__html: post.body }} />
        </div>
    );
  }
}

export default Post;

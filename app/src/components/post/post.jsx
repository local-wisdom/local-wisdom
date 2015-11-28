import React from 'react';

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
            <div className='post-close' onClick={ this.props.onClose.bind(this) }>X</div>
            <h1>{post.title}</h1>
            <div className='post-info'>
                <div className='post-info_time'>{post.date}</div>
                <div className='post-info_author'>By: {post.author}</div>
            </div>
            <div className='post-body' dangerouslySetInnerHTML={{__html: post.body }} />
        </div>
    );
  }
}

export default Post;

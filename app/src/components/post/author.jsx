import React from 'react';

class Author extends React.Component {

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
        <div className="map-post_author">
            <div className="map-post_author-avatar" style={{"background-image": `url('${post.avatar}')`}}></div>
            <div className="map-post_author-info">
                <div className="map-post_author-name">{post.author}</div>
                <div className="map-post_author-shop">{post.shop}</div>
            </div>
        </div>
    );
  }
}

export default Author;

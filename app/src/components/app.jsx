import React from 'react';
import Nav from './nav/nav.jsx';
import Map from './map/map.jsx';
import Footer from './footer/footer.jsx';
import Post from './post/post.jsx';
import API from '../util/api';
import _ from 'lodash';

class App extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        posts: [],
        showPost: false,
        currentPost: null
    }
  }

  componentDidMount(){
      this.getPosts();
  }

  onOpenPost(title) {
      let post = this.state.posts.filter(p => p.title === title)[0];
      this.setState({
          showPost: true,
          currentPost: post
      });
  }

  onClosePost(title) {
      document.querySelector('.post').classList.add('hide');
      setTimeout(() => {
          this.setState({
              showPost: false,
              currentPost: null
          });
      }, 200);
  }


  getPosts() {
      this.setState({posts: API.getAll()});
  }

  onFilterChange(filter){
      let posts = filter === 'all' ? API.getAll() : API.getAll().filter(post => _.includes(post.tags, filter));
      this.setState({ posts: posts });
  }

  render() {
    return (
        <main role='container'>
            <Nav />
            { this.state.showPost ? <Post onClose={ this.onClosePost.bind(this) } post={ this.state.currentPost }/> : null }
            <Map posts={ this.state.posts } onOpenPost={ this.onOpenPost.bind(this) } />
            <Footer onFilterChange={this.onFilterChange.bind(this)}/>
        </main>
    );
  }
}

export default App;

import React from 'react';
import Nav from './nav/nav';
import Authors from './authors/authors';
import Editor from './editor/editor';
import API from '../util/api';

class Admin extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
        editMode: false,
        editItem: null,
        authors: undefined
    };
  }

  componentDidMount(){
      API.getAll('authors').then(response => { console.log(response); this.setState({authors: response})});
  }

  onEdit(author){
      this.openEditor( author );
  }

  openEditor(item){
      this.setState({editMode: true, editItem: item });
  }

  onSave(){
      API.getAll('authors').then(response => {
          this.setState({authors: response, editMode: false, editItem: null})
      });
  }

  onClose(){
      let editor = document.querySelector('.editor');
      editor.classList.add('hide');

      editor.addEventListener('animationend', () => {
          this.setState({editMode: false, editItem: null });
      });


  }

  render() {
      if( !this.state.editMode ){
          return (
              <main role='container' style={{paddingTop: '60px'}}>
                <Nav />
                <h1>Hello Admin</h1>
                <Authors authors={this.state.authors} onEdit={ this.onEdit.bind(this) }/>
              </main>
          );
      }else {
          return (
              <main role='container' style={{paddingTop: '60px'}}>
                <Nav />
                <h1>Editor</h1>
                <Authors authors={this.state.authors} onEdit={ this.onEdit.bind(this) }/>
                <Editor item={ this.state.editItem } onSave={ this.onSave.bind(this) } onClose={ this.onClose.bind(this)} />
              </main>
        );
      }
  }
}


export default Admin;

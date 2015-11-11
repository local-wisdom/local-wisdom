import React from 'react';
import Author from './author';
import API from '../../util/api';

class Authors extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            authors: this.props.authors
        };
    }

    componentDidMount(){
    }

    componentDidUpdate(){
        this.setState({authors: this.props.authors});
    }

    onAuthorEdit(author){
        this.props.onEdit( author );
    }

    render() {
        let authors;
        if( this.state.authors ){
            authors = this.state.authors.map(author => {
                return <Author onEdit={ this.onAuthorEdit.bind(this) } author={ author } />
            });
        }

        if( !authors ){
            return (
                <section>
                    <h1>Loading authors...</h1>
                </section>
            );
        }else {
            return (
                <section className='list-view'>
                    {authors}
                </section>
            );
        }

    }
}

export default Authors;

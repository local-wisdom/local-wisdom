import React from 'react';

class Author extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {};
    }

    componentDidMount(){
    }

    onEdit(e){
        let author = this.props.author;
        this.props.onEdit( author );
    }

    render() {
        let author = this.props.author,
            listItems = Object.keys(author).map( key => {
                switch (key) {
                    case 'avatar':
                        return (<div className='list-item_item avatar' style={{backgroundImage: `url('${ author.avatar }')`}}/>);
                    case 'posts':
                        return (<div className={`list-item_item ${ key }`}>{author.posts.length }</div>);
                    case 'id':
                        break;
                    default:
                        return (<div className={`list-item_item ${ key }`}>{author[key]}</div>);
                }
            });

        return (
            <div className='list-item'>
                { listItems }
                <div className='list-item_item actions'>
                    <div className='list-item_action edit' onClick={ this.onEdit.bind(this) }>Edit</div>
                    <div className='list-item_action delete'>Delete</div>
                </div>
            </div>
        );
    }
}

export default Author;

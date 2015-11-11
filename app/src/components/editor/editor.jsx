import React from 'react';
import FormField from './form-field';
import L from 'leaflet';
import API from '../../util/api';

class Editor extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            form: {}
        };
    }

    componentDidMount(){
    }

    componentDidUpdate(){
    }

    onClose(e){
        console.log('close', e);
        this.props.onClose();
    }

    onSubmit(){
        API.saveAuthor(this.state.form, this.props.item).then(resp => {
            this.props.onSave();
        });
    }

    onChange(input){
        let form = this.state.form;
        if( form[input.key] ){
            form[input.key] = input.value;
            this.setState({form: form});
        }else {
            form[input.key] = input.value;
            this.setState({form: form});
        }
    }

    render() {
        let item = this.props.item,
            items = Object.keys(item).map(key => {
                switch (typeof item[key]) {
                    case 'string':
                        return <FormField type='string' label={key} value={item[key]} onChange={ this.onChange.bind(this) } />
                        break;
                    case 'array':
                        break;
                    default:

                }
            });
        return (
            <div className='editor'>
                <h1>Editor</h1>
                <div className='close' onClick={ this.onClose.bind(this) }>close</div>
                {items}
                <button className='form-submit' onClick={ this.onSubmit.bind(this) }>Sumbit</button>
            </div>
        );
    }
}

export default Editor;

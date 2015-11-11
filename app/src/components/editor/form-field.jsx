import React from 'react';
import L from 'leaflet';

class FormField extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    componentDidMount(){
    }

    componentDidUpdate(){
    }

    onChange(e){
        let input = {};
        input.key = this.props.label;
        input.value = e.target.value;
        this.props.onChange(input);
    }

    textInput(){
        return (<div className='text-input-wrapper'>
                    <label for={this.props.label}>{this.props.label}</label>
                    <input type='text' id={this.props.label} defaultValue={ this.props.value } onChange={ this.onChange.bind(this)} />
                </div>);
    }

    render() {
        let field;
        switch (this.props.type) {
            case 'string':
                field = this.textInput();
                break;
            default:
                field = this.textInput();
        }
        return field;
    }
}

export default FormField;

import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = { color: '#a38585'}; // default color
    }
    handleColorChange = (event)=> {
        this.setState({ color: event.target.value});
        const body = document.body;
        body.style.backgroundColor = event.target.value;
    };
    copyColorCode = ()=> {
        navigator.clipboard.writeText(this.state.color)
        .then(()=> alert(`copied: ${this.state.color}`))
        .catch((err)=> console.error('Failed to copy:',err));
    };
    render(){
        return(
            <div className='container'>
                <h1>COLOR PICKER APP</h1>
                <h2>get your colors!!</h2>
                <input type="color" value={this.state.color} onChange={this.handleColorChange}/>
                <div className="color_box" style={{ backgroundColor: this.state.color }}></div>
                <p>{this.state.color}</p>
                <button onClick={this.copyColorCode}>Copy Color</button>
            </div>
        );
    }
}

export default ColorPicker;
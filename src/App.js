/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.css';
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    };
  }
  addToInput = val => {
    let myInput = this.state.input;
    //exclude double zeros at the beginning of caculation
    if (this.state.input.length === 1) {
      if (val !== '0' && myInput !== '0') {
        this.setState({ input: this.state.input + val })
      }
      if (val !== '0' && myInput === '0') {
        this.setState({ input: this.state.input + val })
      }
    } else if (this.state.input.length !== 1) {
      this.setState({ input: this.state.input + val })
    }
  }
  equal = () => {
    this.setState({ input: math.eval(this.state.input) })
  }
  clear = () => {
    this.setState({ input: "" })
  }
  unique(operator) {
    //two '.' operators will not be accepted in one number
    console.log('here')
    if (this.state.input.includes(".") === false) {
      this.setState({ input: this.state.input + operator })
    }
  }
  math = (operator) => {
    //get last char in data string
    const lastChar = this.state.input[this.state.input.length - 1];
    //check if last character is an operand
    const bool = ["*", "+", "-", "/"].includes(lastChar);
    if (bool) {
      //if last element an operator, remove it
      this.setState({ result: this.state.input.slice(0, this.state.result.length - 1) });
    } else {
      //just append operand      
      this.setState({ input: this.state.input + operator })
    }
  }

  render() {
    return (
      <div className="App">
        <div className='wrap'>
          <div className='calculator'>
            <div id="display" className="btn">{this.state.input}</div>
            <div id="clear" className="btn" onClick={() => this.clear()}>C</div>
            <div id="divide" className="btn operator" onClick={() => this.math('/')}>&#247;</div>
            <div id="seven" className="btn" onClick={() => this.addToInput('7')}>7</div>
            <div id="eight" className="btn" onClick={() => this.addToInput('8')} > 8</div >
            <div id="nine" className="btn" onClick={() => this.addToInput('9')}> 9</div >
            <div id="multiply" className="btn operator" onClick={(e) => this.math('*')}>&#215;</div >
            <div id="four" className="btn" onClick={() => this.addToInput('4')}> 4</div >
            <div id="five" className="btn" onClick={() => this.addToInput('5')}> 5</div >
            <div id="six" className="btn" onClick={() => this.addToInput('6')}> 6</div >
            <div id="subtract" className="btn operator" onClick={() => this.math('-')}>&#8722;</div >
            <div id="one" className="btn" onClick={() => this.addToInput('1')}> 1</div >
            <div id="two" className="btn" onClick={() => this.addToInput('2')}> 2</div >
            <div id="three" className="btn" onClick={() => this.addToInput('3')}> 3</div >
            <div id="add" className="btn operator" onClick={() => this.addToInput('+')}>&#43;</div >
            <div id="zero" className="btn" onClick={() => this.addToInput('0')}> 0</div >
            <div id="decimal" className="btn" onClick={() => this.unique('.')}>.</div >
            <div id="equals" className="btn operator" onClick={() => this.equal()}>=</div >
          </div>
        </div>
      </div>
    );
  }
}

export default App;

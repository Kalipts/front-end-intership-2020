import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

//ading list iquivalent here
const numbers = new Array(50).fill(1).map((_, index) => index + 1);
let number = 50;
export default class TertScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.left = document.getElementsByClassName('slider').offsetLeft;

    this.state = {
      isScrolling: false
    };
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.mouseUpHandle);
    window.addEventListener('mousemove', this.mouseMoveHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.mouseUpHandle);
    window.removeEventListener('mousemove', this.mouseMoveHandle);
  }
  mouseUpHandle = async e => {
    if (this.state.isScrolling) {
      this.state.isScrolling = false;
      this.setState(this.state);
    }
  };
  mouseDownHandle = async e => {
    if (!this.state.isScrolling) {
      this.setState({ isScrolling: true });
      this.lastClientX = e.clientX;
      e.preventDefault();
    }
  };
  mouseMoveHandle = async e => {
    if (this.state.isScrolling) {
      this.refs.slider.scrollLeft -=
        -this.lastClientX + (this.lastClientX = e.clientX);
    }
  };



  render() {
    return (
      <div
        className="container"
      >
        <div
          className="slider"
          style={{
            width: '1210px',
            flexDirection: 'row',
            display: 'flex',
            overflowX: 'auto',
            overflowY:'hidden'
          }}
          onMouseDown={this.mouseDownHandle}
          onMouseMove={this.mouseMoveHandle}
          onMouseUp = {this.mouseUpHandle}
          onScroll={this.onMouseMove}
          ref={'slider'}
        >
          {numbers.map(el => (
            <div
              key={el}
              style={{
                height: '65px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: '24px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'black'
              }}
            >
              <h1>{el}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

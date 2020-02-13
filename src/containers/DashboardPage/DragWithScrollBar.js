import React from 'react';
import Container from '../../components/DragWithScrollBarItem/Container';


export default class DragWithScrollBar extends React.Component {
  constructor(props) {
    super(props);

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
      <Container
        onMouseDown={this.mouseDownHandle}
        onMouseMove={this.mouseMoveHandle}
        onMouseUp={this.mouseUpHandle}
        onScroll={this.onMouseMove}
        ref={'slider'}
      >
        {this.props.children}
      </Container>
    );
  }
}
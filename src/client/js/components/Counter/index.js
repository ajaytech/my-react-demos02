import React from 'react'



export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    //
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }

  componentDidMount() {

    window.addEventListener('onscroll', function () {

    })
    // AjAX
    this.interval = setInterval(this.tick, 100)
  }
  componentWillUnmount() {
    
    clearInterval(this.interval)
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
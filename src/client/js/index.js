import React from 'react';
import ReactDOM from 'react-dom';
import CustomLogin from './components/form'

export default class App extends React.Component {

  render() {
    
    return (
      <CustomLogin></CustomLogin>
      );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))

/*import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import Button from './components/Button'
import LoginForm from './components/LoginForm'
import Todos from './components/Todos'

export class Primary extends React.Component {
  render() {
    console.log(this.props)
    return <div>{this.props.children}</div>
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCounter: true
    }
  }
  render() {
    const sytle = {paddingTop: 100}
    return (
      <div className='container' style={sytle}>
        <HelloWorld name={this.props.name} />
        <hr />
        {this.state.showCounter ? <Counter/>: null}
        <hr />
        <button onClick={() => this.setState({showCounter: false})}>
          Hide Counter
        </button>
        <hr />
        <LoginForm />
        <hr />
        <Todos />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOMServer.renderToString(<App />) // <div>primary Submit</div>

*/



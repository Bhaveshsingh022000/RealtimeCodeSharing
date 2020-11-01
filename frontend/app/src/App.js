import React, { Component } from 'react';
import './App.css';
import TextEditor from './Containers/textEditior';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './Containers/Landing/Landing';

class App extends Component {
  state = {
    p: null
  }
  componentDidMount() {
    // axios.get('http://localhost:3005/').then(res => {
    //   console.log(res.data);
    //   this.setState({ p: "/" + res.data.roomName });
    // })
  }


  render() {
    return (  
      <div className="App">
        <Switch>
          <Route path="/editor" exact component={TextEditor} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);

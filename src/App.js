import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import routes from './Routes/routes';

class App extends Component {
  render() {
    return (
      <div>
      {routes}
      </div>
    );
  }
}

export default App;
/* let actionCreator = {
  increaseNum,
  changeNum
}

function mapStateToProps(state) {
  return {
    num: state.num
  }
}

export default connect(mapStateToProps, actionCreator)(App);
import { connect } from 'react-redux';
import { increaseNum } from './reducer';
import { changeNum } from './reducer'; */
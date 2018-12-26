import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Loadable from 'react-loadable';
import './App.css';

import {
  handleCardAdd
} from './actions/mainActions';

class App extends Component {
  render() {
    const { handleCardAdd } = this.props;
    return (
      <div className="App">
        <button
          onClick={handleCardAdd}
        >
          Add card
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.main.cards
  }
}

export default connect(
  mapStateToProps,
  {
    handleCardAdd
  }
)(App);

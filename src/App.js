import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
// import Loadable from 'react-loadable';
import './App.css';

import ColorizedCard from './dynamic_components/colorized-card/component/colorized-card';
import getColorizedCardModule from './dynamic_components/colorized-card/redux/colorized-card-module';

import {
  handleCardAdd
} from './actions/mainActions';

class App extends Component {
  render() {
    const { handleCardAdd, cards } = this.props;
    return (
      <div className="App">
        <button
          onClick={handleCardAdd}
        >
          Add card
        </button>
        <div className="cards">
          {
            cards.map((card) =>
              <DynamicModuleLoader
                key={card.id}
                modules={[getColorizedCardModule(card.id)]}
              >
                <ColorizedCard id={card.id} />
              </DynamicModuleLoader>
            )
          }
        </div>
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

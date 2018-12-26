import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import './App.css';

import {
  handleCardAdd
} from './actions/mainActions';

class App extends Component {

  _colorizedCard = null;

  getColorizedCard() {
    if (this._colorizedCard) {
      return this._colorizedCard;
    }

    const LoadableColorizedCard = Loadable(
      {
        loader: () => import('./dynamic_components/colorized-card'),
        loading: () => <div>Loading Script...</div>
      }
    )
    this._colorizedCard = LoadableColorizedCard;
    return this._colorizedCard;
  }

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
            cards.map((card) => {
              const Card = this.getColorizedCard();
              return (
                <Card key={card.id} id={card.id}/>
              )
            })
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

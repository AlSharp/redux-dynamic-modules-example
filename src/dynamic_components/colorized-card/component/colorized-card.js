import React from 'react';
import { connect } from 'react-redux';
import './colorized-card.css';

import { handleCardRemove } from '../../../actions/mainActions';
import { handleColorChange } from '../redux/colorized-card-actions';

const colors = [
  {name: 'Red', hex: '#FF0000'},
  {name: 'Blue', hex: '#0000FF'},
  {name: 'Green', hex: '#008000'},
  {name: 'Light Sea Green', hex: '#20B2AA'},
  {name: 'Light Coral', hex: '#F08080'}
]

const Card = (
  {
    id,
    colorHex,
    handleCardRemove,
    handleColorChange
  }
) => {
  return(
    <div className="card">
      <div className="colored" style={{ backgroundColor: colorHex }}/>
      <div className="colors">
        {
          colors.map((color, index) =>
            <div
              key={index}
              className="color-button"
              style={{ backgroundColor: color.hex }}
              onClick={e => {
                handleColorChange(
                  {
                    id: id,
                    colorRGB: e.target.style.backgroundColor
                  }
                )
              }}
            >
            </div>
          )
        }
        <button
          onClick={() => handleCardRemove(id)}
        >
          Remove card
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    colorHex: state[ownProps.id].colorHex
  }
}

export default connect(
  mapStateToProps,
  {
    handleColorChange,
    handleCardRemove
  }
)(Card);
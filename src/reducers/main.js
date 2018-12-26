export default (state={
  cards: []
}, action) => {
  
  switch(action.type) {

    case 'CARD_ADD': {
      return {
        ...state,
        cards: state.cards.concat({ id: `card${action.payload}` })
      }
    }

    case 'CARD_REMOVE': {
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      }
    }

    default:
      return state;
  }
}
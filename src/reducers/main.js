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
    default:
      return state;
  }
}
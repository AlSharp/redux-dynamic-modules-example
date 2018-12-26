export default (state={
  id: undefined,
  colorHex: '#FF0000'
}, action) => {

  switch(action.type) {
    case 'COLORIZED_CARD_STATE_INIT': {
      if (!state.id) {
        return {
          ...state,
          id: action.payload
        }
      }
      return state;
    }

    case 'COLOR_CHANGE': {
      if (action.meta.id === state.id) {
        return {
          ...state,
          colorHex: action.payload
        }
      }
      return state;
    }

    default:
      return state
  }
}
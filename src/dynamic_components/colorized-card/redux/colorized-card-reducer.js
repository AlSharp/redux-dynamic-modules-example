export default id => (state={
  colorHex: '#FF0000'
}, action) => {

  switch(action.type) {
    case `@@${id}/COLOR_CHANGE`: {
      return {
        ...state,
        colorHex: action.payload
      }
    }

    default:
      return state
  }
}
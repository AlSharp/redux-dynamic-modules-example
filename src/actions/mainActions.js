export const handleCardAdd = () => dispatch => {
  dispatch(
    {
      type: 'CARD_ADD',
      payload: new Date().valueOf()
    }
  )
}

export const handleCardRemove = id => dispatch => {
  dispatch(
    {
      type: 'CARD_REMOVE',
      payload: id
    }
  )
}
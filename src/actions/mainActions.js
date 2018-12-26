export const handleCardAdd = () => dispatch => {
  dispatch(
    {
      type: 'CARD_ADD',
      payload: new Date().valueOf()
    }
  )
}
// initialize state
export const colorizedCardStateInit = id => dispatch => {
  dispatch(
    {
      type: 'COLORIZED_CARD_STATE_INIT',
      payload: id
    }
  )
}

const getColorHex = rgb => {
  return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => String("0" + parseInt(color).toString(16)).slice(-2)).join('');
}

export const handleColorChange = props => dispatch => {
  dispatch(
    {
      type: 'COLOR_CHANGE',
      payload: getColorHex(props.colorRGB),
      meta: { id: props.id }
    }
  )
}
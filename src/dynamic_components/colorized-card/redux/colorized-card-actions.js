const getColorHex = rgb => {
  return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => String("0" + parseInt(color).toString(16)).slice(-2)).join('');
}

export const handleColorChange = props => dispatch => {
  dispatch(
    {
      type: `@@${props.id}/COLOR_CHANGE`,
      payload: getColorHex(props.colorRGB),
      meta: { id: props.id }
    }
  )
}
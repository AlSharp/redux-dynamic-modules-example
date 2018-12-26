import colorizedCardReducer from './colorized-card-reducer';
import { colorizedCardStateInit } from './colorized-card-actions';

const getColorizedCardModule = id => {
  return {
    id: id,
    reducerMap: {
      [id]: colorizedCardReducer
    },
    initialActions: [colorizedCardStateInit(id)]
  }
}

export default getColorizedCardModule;
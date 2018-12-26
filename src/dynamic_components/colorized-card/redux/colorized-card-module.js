import colorizedCardReducer from './colorized-card-reducer';

const getColorizedCardModule = id => {
  return {
    id: id,
    reducerMap: {
      [id]: colorizedCardReducer(id)
    }
  }
}

export default getColorizedCardModule;
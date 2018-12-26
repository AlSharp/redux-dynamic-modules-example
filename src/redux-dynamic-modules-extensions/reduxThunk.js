import thunk from 'redux-thunk';

export const getThunkExtension = () => {
  return {
    middleware: [thunk]
  }
}
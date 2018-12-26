import main from './main';

export const getMain = () => {
  return {
    id: 'main',
    reducerMap: {
      main: main
    }
  }
}
import { createStore } from 'redux-dynamic-modules';
import { getMain } from './reducers/index';
import { getThunkExtension } from './redux-dynamic-modules-extensions/reduxThunk';
import { getLoggerExtension } from './redux-dynamic-modules-extensions/reduxLogger';


const store = createStore(
  {},
  [],
  [getThunkExtension(), getLoggerExtension()],
  getMain()
)

export default store;
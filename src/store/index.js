import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const storage = createStore(reducer, applyMiddleware(promise, thunk));

export default storage
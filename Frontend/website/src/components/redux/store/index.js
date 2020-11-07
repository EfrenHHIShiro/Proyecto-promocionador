import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataPersistence from '../../redux/reducer/dataPersistence'

const reducer = combineReducers({
 dataPersistence
});
 
const store = createStore(reducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
)
export default store;
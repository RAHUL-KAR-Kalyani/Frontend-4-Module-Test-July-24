import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import {thunk} from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk));

const AppProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default AppProvider;

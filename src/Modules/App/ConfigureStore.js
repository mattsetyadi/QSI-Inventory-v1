import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import Saga from './SagaMiddleware';
// import history from './History';
import * as _ from 'lodash';
import { reducer as formReducer } from 'redux-form';

import templateState from '../Template/Store/TemplateReducer';
import inventoryState from '../Inventory/Store/InventoryReducer';
import supplierState from '../Supplier/Store/SupplierReducer';

const combinedReducers = combineReducers({
  //   router: connectRouter(history),
  templateState,
  supplierState,
  inventoryState,
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitellist: ['TemplateState'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  _.has(window, '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__')
    ? composeWithDevTools({ tace: true, traceLimit: 1000 })
    : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);
sagaMiddleware.run(Saga);

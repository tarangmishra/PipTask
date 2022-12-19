import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import reducers from './reducers/index'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

var middlewares = [thunk]

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
 // whitelist: ['authReducer']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
)

export const persistore = persistStore(store)

// import {createStore} from 'redux'
// import reducers from './reducers/index'

// export const store=createStore(reducers)
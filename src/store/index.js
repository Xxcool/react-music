import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {persistStore, persistReducer} from 'redux-persist';
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'

const storageConfig = {
  key: 'root', // 必须有的
  storage:storageSession, // 缓存机制
  whitelist: ['loginStatus'] // reducer 里持久化的数据,除此外均为不持久化数据
}

const myPersistReducer = persistReducer(storageConfig, reducer);

// 创建store实例
let store = createStore(
    myPersistReducer,
    applyMiddleware(thunk)
);
export const persistor = persistStore(store)
export default store

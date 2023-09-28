import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFavorites(){
    try {
        const favoriteResponse= yield axios.get('api/favorites');
        yield put ({type:"SET_FAVORITE", payload: favoriteResponse.data})
    } catch (error) {
        console.log("error with favorite get request", error);
    }

}

const favorites = (state = [], action) =>{
    switch (action.type){
    case 'SET_FAVORITE':
        return action.payload;
    } 
    return state;
  };

  const categories = (state = [], action) =>{
    switch (action.type){
    case 'SET_CATEGORIES':
        return action.payload;
    } 
    return state;
  };





function* rootSaga() {
    // We add all sagas here, like this: yield takeLatest('ACTION_TO_WATCH_FOR', nameOfSagaFunctionToRun);
    
    // If we see an action "FETCH_ELEMENTS", run the fetchElements saga.
    yield takeLatest('FETCH_FAVORITES', fetchFavorites);
    // If we see an action "ADD_ELEMENT", run the postElement saga.
    //yield takeLatest('ADD_ELEMENT', postElement);
}


const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        favorites,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger)
  );


// Create sagaMiddleware
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Provider store={storeInstance}>
      <App />
    </Provider>
    </React.StrictMode>
);

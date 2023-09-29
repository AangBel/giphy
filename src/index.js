import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';



function* fetchGifs(action) {
  try {
    const gifResponse = yield axios.get(`/api/search/${action.payload}`);
    console.log('gif response', gifResponse);

    const gifData = gifResponse.data.data;

    if (gifData.length > 0) {
      for (const gif of gifData) {
        const gifURL = gif.images.original.url;
        yield put({ type: "SETTING_GIFS", payload: gifURL });
      }

    } else {
      console.log("No GIFs found in the response");
    }
  } catch (error) {
    console.log("error with getting gifs", error);
  }
}








function* fetchFavorites(){
    try {
        const favoriteResponse= yield axios.get('/api/favorites');
        //  TODO-------------- change type to SETTING FAVORITE IN ORDER TO PReVENT ERROR 
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
    yield takeLatest('FETCHING_GIFS', fetchGifs);
    // If we see an action "ADD_ELEMENT", run the postElement saga.
    //yield takeLatest('ADD_ELEMENT', postElement);
}


// https://github.com/PrimeAcademy/jade-syllabus/blob/main/curriculum-content/week-12-sql-advanced-redux-sagas/12-03c-redux-saga-setup.md

const sagaMiddleware = createSagaMiddleware();

const giphyReducer = (state = [], action) => {
    switch (action.type) {
      case "SETTING_GIFS":
        return [action.payload, ...state];

      default:
        return state;
    }
  };
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        favorites,
        giphyReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

// Create sagaMiddleware
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Provider store={storeInstance}>
      <App />
    </Provider>
    </React.StrictMode>
);

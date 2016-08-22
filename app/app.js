import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import profileReducer from './reducers'
import Content from './components/content';

require('./style.css');

const getInitState = () => {
  const localProfiles = JSON.parse( localStorage.getItem('profiles') );
  let initState = { profiles: [] }
  if(localProfiles !== null)
     initState = { profiles : localProfiles }
 return initState;
};

let store = createStore(profileReducer, getInitState() );

store.subscribe(() =>{
  let profiles = store.getState().profiles;
  localStorage.setItem("profiles", JSON.stringify(profiles) );
})

ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider> ,
  document.getElementById('content')
)


import { createStore } from 'redux'
import profiles from './reducers'
import {
  addProfile,
  editProfile,
  editInline,
  deleteProfile
} from './actions'
let store = createStore(profiles)

store.subscribe(() => {
  console.log('===================');
    console.log(store.getState())
});

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(addProfile({
  name: "tostyle",
  nickname: "dig",
  age:25
}));

store.dispatch(addProfile({
  name: "niyolll",
  nickname: "kwangg",
  age:24
}));

store.dispatch( editInline(2) );

store.dispatch(editProfile(2,{
  name: "nittaya",
  nickname: "KWANG",
  age:25
}));

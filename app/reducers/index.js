import { combineReducers } from 'redux'
import profiles from './profiles'
import editMode from './editMode'

const profileReducer = combineReducers({
  profiles
})

export default profileReducer

import {
  ADD_PROFILE,
  EDIT_PROFILE,
  EDIT_INLINE,
  DELETE_PROFILE,
  CANCEL_EDIT
} from '../actions'
const getNextID = (state) => {
  let nextID=1;
  if(state.length > 0)
  {
    nextID = Math.max.apply(Math,
      state.map(  (profile) => profile.id ) ) + 1;
  }
  return nextID
}

const profiles = (state =[],action) => {
  let profileList = [];
  switch (action.type) {
    case ADD_PROFILE:
         const nextID = getNextID(state);
         let profile = {
          id: nextID,
          name: action.profile.name,
          nickname: action.profile.nickname,
          age: action.profile.age,
          editable:false
         }
         return [
             ...state,
             profile
           ]

    case EDIT_PROFILE:
         profileList = state.map( (profile) => {
             if(action.id !== profile.id)
                return profile
             return Object.assign({}, profile, {
               name: action.profile.name,
               nickname: action.profile.nickname,
               age: action.profile.age,
               editable:false
             })
         })
         return profileList;
    case EDIT_INLINE:
          profileList = state.map( (profile) => {
              if(action.id !== profile.id)
                 return profile
              return Object.assign({}, profile, {
                editable:true
              })
          })
         return profileList
   case CANCEL_EDIT:
         profileList = state.map( (profile) => {
             if(action.id !== profile.id)
                return profile
             return Object.assign({}, profile, {
               editable:false
             })
         })
        return profileList
    case DELETE_PROFILE:
        profileList = state.filter( (profile) => profile.id !== action.id)
        return profileList
      break;
    default:
      return state;
  }
}

export default profiles

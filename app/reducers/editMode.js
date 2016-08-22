import {
  EDIT_INLINE,
  EDIT_PROFILE
} from '../actions'

const editMode = (state=false,action) => {
  console.log(state);
  switch (action.type) {
    case EDIT_INLINE:
        return true;
    case EDIT_PROFILE:
        return false;
      break;
    default:
       return false;

  }
}
export default editMode;

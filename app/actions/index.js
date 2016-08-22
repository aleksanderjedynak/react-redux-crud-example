export const ADD_PROFILE = 'ADD_PROFILE';
export const EDIT_INLINE = 'EDIT_INLINE';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function addProfile(profile)
{
  return {
    type: ADD_PROFILE,
    profile
  }
}

export function editInline(id)
{
  return {
    type: EDIT_INLINE,
    id
  }
}
export function editProfile(id,profile)
{
  return {
    type: EDIT_PROFILE,
    id,
    profile
  }
}
export function deleteProfile(id){
  return {
    type: DELETE_PROFILE,
    id
  }
}
export function cancelEdit(id){
  return {
    type: CANCEL_EDIT,
    id
  }
}

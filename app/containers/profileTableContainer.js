import React from 'react';
import { connect } from 'react-redux'
import { editInline, editProfile, deleteProfile, cancelEdit } from '../actions';
import ProfileTable from '../components/profileTable'

const mapStateToProps = (state) => {
    return {
       profiles: state.profiles
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickDeleteProfile:  (profileID) => {
      dispatch(deleteProfile( profileID ))
    },
    onClickEditProfile: (profileID,profileDetail) => {
      dispatch(editProfile(profileID,profileDetail) )
    },
    onClickEditInline: ( profileID ) => {
      dispatch(editInline( profileID ))
    },
    onClickCancelEdit: ( profileID ) => {
      dispatch(cancelEdit( profileID ))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileTable)

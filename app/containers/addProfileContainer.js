import React from 'react'
import { connect } from 'react-redux'
import { addProfile } from '../actions'
import AddProfile from '../components/addProfile'

let AppProfileContainer = ({ dispatch , editMode}) => {
  return (
    <AddProfile
        onAddProfileClick={ (newProfile) => dispatch( addProfile(newProfile) ) }
        editMode={editMode} />
  )
}

const mapStateToProps = (state) => {
    let editMode = false;
    const profileEditable = state.profiles.filter( ( profile ) => profile.editable === true )
    if( profileEditable.length > 0)
       editMode = true;
    return {
       editMode
    }
}

export default connect(mapStateToProps)(AppProfileContainer)

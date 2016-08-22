import React from 'react';

export default class ProfileRow extends React.Component
{
    deleteProfile(){
      const { onClickDeleteProfile } = this.props;
      if( confirm("Confirm Delete ?") )
          onClickDeleteProfile()
    }
    render(){
      const { profile ,onClickEditInline } = this.props;
      return (
        <tr>
          <td>{profile.name}</td>
          <td>{profile.age}</td>
          <td>{profile.nickname}</td>
          <td>
            <button className="button button-edit" onClick={onClickEditInline}>Edit</button>
            <button className="button button-delete" onClick={this.deleteProfile.bind(this)}>Delete</button>
          </td>
        </tr>
      )
    }
}

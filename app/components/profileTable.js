import React from 'react';
import ProfileRow from './profileRow';
import ProfileRowEditable from './profileRowEditable';
import { editInline, editProfile, deleteProfile} from '../actions';

export default class ProfileTable extends React.Component
{
    render(){
      const { profiles,
        onClickDeleteProfile,
        onClickEditProfile,
        onClickEditInline,
        onClickCancelEdit
      } = this.props;
      const profileRows = profiles.map( (profile) => {
         if( profile.editable )
            return <ProfileRowEditable
                      key={profile.id}
                      profile={profile}
                      onClickEditProfile={ ( profileDetail ) => {
                        onClickEditProfile(profile.id, profileDetail)
                      }}
                      onClickCancelEdit={ () => {onClickCancelEdit(profile.id)} } />
         return <ProfileRow
                  key={profile.id}
                  profile={profile}
                  onClickEditInline={ () => {
                    onClickEditInline(profile.id)
                  }}
                  onClickDeleteProfile={ () => {onClickDeleteProfile(profile.id)} } />
      })
      return (
        <div className="card">
          <table>
              <thead>
                <tr>
                  <th >Name</th>
                  <th>Age</th>
                  <th>Nickname</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{profileRows}</tbody>
          </table>
        </div>
      )
    }
}

import React from 'react';
import AddProfileContainer from '../containers/addProfileContainer';
import ProfileTableContainer from '../containers/profileTableContainer';

export default class Content extends React.Component
{
    render(){
      return (
        <div>
           <ProfileTableContainer />
           <AddProfileContainer />
        </div>
      )
    }
}

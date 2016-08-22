import React from 'react';
import { getAges } from '../utility';

export default class ProfileRowEditable extends React.Component
{
    updateProfile(){
      const { onClickEditProfile } = this.props;
      onClickEditProfile({
        name: this.refs.name.value,
        nickname: this.refs.nickname.value,
        age: this.refs.age.value
      })
    }
    render(){
      const { onClickCancelEdit } = this.props;
      const ageOptions = getAges().map( (ageData,index) => {
        return <option key={index}>{ageData}</option>
      })
      const { name, nickname, age} = this.props.profile
      return (
        <tr>
          <td><input type="text" ref="name" defaultValue={name}/></td>
          <td><select ref="age" defaultValue={age}>{ageOptions}</select></td>
          <td><input type="text" ref="nickname" defaultValue={nickname}/></td>
          <td>
             <button className="button button-edit" onClick={this.updateProfile.bind(this)}>Edit</button>
             <button className="button button-cancel" onClick={onClickCancelEdit}>Cancel</button>
          </td>
        </tr>
      )
    }
}

import React from 'react';
import { getAges } from '../utility';
export default class AddProfile extends React.Component
{
    addProfile(){
        const { onAddProfileClick } = this.props
        onAddProfileClick({
          name: this.refs.name.value,
          nickname: this.refs.nickname.value,
          age: this.refs.age.value,
        })
    }
    clearForm(){
      this.refs.name.value="";
      this.refs.nickname.value="";
      this.refs.age.value="";
    }
    render(){
      const { editMode } = this.props;
      const ageOptions = getAges().map( (ageData,index) => {
        return <option key={index}>{ageData}</option>
      })
      return (
        <div className="card">
          { (!editMode) ?
          <div className="form">
            <form onSubmit={ e => {
                e.preventDefault();
                this.addProfile()
            }}>
            <div className="form-content"><input required ref="name" type="text" placeholder="Name" /></div>
            <div className="form-content">
                 <select required ref="age" >
                 <option value="">Age</option>
                 {ageOptions}
                 </select>
            </div>
            <div className="form-content"><input required ref="nickname" type="text" placeholder="Nickname"/></div>
            <div className="form-content">
              <button type="submit" className="button button-success" >Save</button>
              <button type="button" className="button button-cancel" onClick={this.clearForm.bind(this)}>Cancel</button>
            </div>
            </form>
          </div> : ""
          }
          <div className="clear-block">

          </div>
        </div>
      )
    }
}

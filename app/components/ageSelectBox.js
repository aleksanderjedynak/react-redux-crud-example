import React from 'react';

class AgeSelectBox extends React.Component{
  render(){
      const { valx, refName } = this.props
      let ages = [];
      for(let age=1; age<=60; age++)
        ages.push(age)
      const ageOptions = ages.map( (ageData,index) => {
        return <option key={index}>{ageData}</option>
      })
      return (
        <select defaultValue={valx} ref="age" >
            <option value="">Select Age</option>
            {ageOptions}
        </select>
      )
  }
}
export default AgeSelectBox;

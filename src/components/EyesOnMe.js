// Code EyesOnMe Component Here

import React, { PropTypes } from 'react'

class EyesOnMe extends React.Component {
  render () {
    return(
      <button onFocus={this.onFocus} onBlur={this.onBlur} />
    )
  }

  onFocus(){
    console.log('Good!')
  }

  onBlur(){
    console.log('Hey! Eyes on me!')
  }
}

export default EyesOnMe;

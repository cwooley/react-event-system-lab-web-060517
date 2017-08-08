// Code Keypad Component Here

import React, { PropTypes } from 'react'

class Keypad extends React.Component {
  render () {
    return(
      <input type="password" onKeyUp={this.keyPressed} />
    )
  }
  keyPressed(e){
    console.log('Entering password...')
  }
}

export default Keypad;

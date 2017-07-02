import React from 'react'
import { connect } from 'react-redux'
import { decrease } from './actions'

export const Decrease = ({ decrease }) => <button onClick={decrease}>-</button> 

const mapDispatchToProps = dispatch => ({
  decrease: () => dispatch(decrease) 
})

export const SmartDecrease = connect(undefined, mapDispatchToProps)(Decrease)

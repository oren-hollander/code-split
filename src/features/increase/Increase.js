import React from 'react'
import { connect } from 'react-redux'
import { increase } from './actions'

export const Increase = ({increase}) => <button onClick={increase}>+</button> 

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase)
})

export const SmartIncrease = connect(undefined, mapDispatchToProps)(Increase)
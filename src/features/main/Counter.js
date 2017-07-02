import React from 'react'
import { connect } from 'react-redux'
import { loadComponent } from '../../split/loadComponent'
import { SmartIncrease } from '../increase/Increase'

const DummyDecrease = () => <button disabled>-</button>

export const Counter = ({ count }) => {

  const Decrease = loadComponent('Decrease', DummyDecrease)

  return (
    <div>
      <Decrease/>{count}<SmartIncrease/>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state
})

export const SmartCounter = connect(mapStateToProps)(Counter)
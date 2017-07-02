import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { componentStoreShape } from './propTypes'

export default class ComponentProvider extends Component {
  static propTypes = {
    componentStore: componentStoreShape.isRequired,
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    componentStore: componentStoreShape.isRequired
  }

  getChildContext() {
    return { componentStore: this.props.componentStore }
  }

  render() {
    return Children.only(this.props.children)
  }
}
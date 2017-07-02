import PropTypes from 'prop-types'

export const componentStoreShape = PropTypes.shape({
  add: PropTypes.func.isRequired,
  get: PropTypes.func.isRequired
})
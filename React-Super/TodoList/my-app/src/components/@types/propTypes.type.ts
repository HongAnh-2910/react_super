import PropTypes from 'prop-types'
export const todoType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
})

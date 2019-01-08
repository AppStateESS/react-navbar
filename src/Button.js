'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const getClass = () => {
    let size
    switch (props.size) {
      case 'lg':
      case 'sm':
        size = 'btn-' + props.size
        break
    }

    return `btn ${size} btn-${props.color}`
  }

  return (
    <div>
      <button className={getClass()} onClick={props.handleClick}>{props.label}</button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object,]),
  handleClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string
}

Button.defaultProps = {
  color: 'default',
  size: null
}

export default Button

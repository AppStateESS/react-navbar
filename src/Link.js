'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Link = ({href, children, handle}) => {
  if (href && href.length > 0) {
    return (<a className="nav-link" href={href} onClick={handle}>{children}</a>)
  } else {
    return (<a className="nav-link pointer" onClick={handle}>{children}</a>)
  }
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
  handle: PropTypes.func
}

export default Link

'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  let button
  if (props.onClick) {
    button = (
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={props.onClick}>
        <i className="fas fa-search"></i>
      </button>
    )
  }
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}/> {button}
      </form>
    </div>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func
}

Search.defaultProps = {
  placeholder: 'Search...',
  value: ''
}

export default Search

import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = (props) => {
  return props.pending
    ? <img data-testid='wait-indicator' src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' alt='loading indicator' style={{ width: '100px', height: '100px' }} />
    : null
}

function mapStateToProps (state) {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps)(WaitIndicator)

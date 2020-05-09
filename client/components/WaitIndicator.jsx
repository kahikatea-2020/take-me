import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = (props) => {
  return props.pending
    ? <img data-testid='wait-indicator' src='/loadIndicator.gif' alt='loading indicator' style={{ width: 50 }} />
    : null
}

function mapStateToProps (state) {
  return {
    pending: state.pending
  }
}

export default connect(mapStateToProps)(WaitIndicator)

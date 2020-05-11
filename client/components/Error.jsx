import React from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

import { hideError } from '../actions/error'

class Error extends React.Component {
  // if (props.error) {
  //   return Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: props.error,
  //     footer: '<a href>Please try again</a>'
  //   },
  //   onClose: () => {
  //     this.props.dispatch(clearError())
  //   })
  // }
  handleClick = () => {
    this.props.dispatch(hideError())
  }

  render () {
    if (this.props.error) {
      return (
        <div className="errorPage">
          <div className="errorContainer">
            <div className="errorMessageBox">
              <div className="errorSymbolDiv">
                <span className="errorSymbol"><Icon name="exclamation triangle" /></span>
              </div>

              <div className="errorMessage">
                <div><h2>An Error has Occured</h2></div>
                <p>{this.props.error}</p>
                <div className="errButton" onClick={this.handleClick}><div className="closeErr" unselectable="on">x</div></div>
                <div className="errAnimate"></div>
              </div>
            </div>
          </div>
        </div>

      )
    }
    return null
  }
}

function mapStateToProps (state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Error)

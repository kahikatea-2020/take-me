import React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {isAuthenticated} from 'authenticare/client'

class Footer extends React.Component {
  render () {
    return (
      <>
        <Container id="footer">
          <div className="ui grid container" id="footerWrapper">
            <div className="four wide column" id="footerColumn">
              <div className="ui list" id="listWrapper">
                <Link to={'/'}>
                  <div className="item">
                    <img src="/footer_blue-15.png" alt="logo" id="footerLogo"/>
                  </div>
                </Link>
                <div className="item">
                  <p id="tagLine">Doing our part for a more sustainable <br />New Zealand.</p>
                </div>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui link list" id="footerLinks">
                <div className="active item bananas" id="footerHeaders">
                  TakeMe
                </div>
                <Link className="item" id="footerLinks" to={`/about`}>About us</Link>
                <Link className="item" id="footerLinks" to={`/guidelines`}>Guidelines</Link>
                <Link className="item" id="footerLinks" to={`/sign-up`}>Sign Up</Link>
              </div>
            </div>
            <div className="four wide column">
              <div className="ui link list" id="footerLinks">
                <div className="active item bananas" id="footerHeaders">
                  Quick Links
                </div>
                <Link className="item" id="footerLinks" to={`/`}>Latest Listings</Link>
                <Link className="item" id="footerLinks" to={`/new-listing`}>List an Item</Link>
                {isAuthenticated()
                ? <Link className="item" id="footerLinks" to={`/profile/${this.props.user.id}`}>Profile</Link>
                : <Link className="item" id="footerLinks" to={`/login`}>Profile</Link>}
              </div>
            </div>
            <div className="four wide column">
              <div className="ui list" id="listWrapper">
                <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                    New Zealand
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href="mailto:hello@takemenz.com">hello@takemenz.com</a>
                  </div>
                </div>
                <div className="item">
                  <i className="linkify icon"></i>
                  <div className="content">
                    <a href="https://take-me-nz.herokuapp.com">takemenz.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}



export default connect(mapStateToProps)(Footer)

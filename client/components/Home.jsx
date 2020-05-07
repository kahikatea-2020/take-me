import React from 'react'
import { connect } from 'react-redux'
//redux

// import CategoryList from 'CategoryList'
// import Search from './Search'
import ListItem from './ListItem'

class Home extends React.Component {
  componentDidMount () {
    dispatchEvent()
  }
  render() {
    return (
    <>
    <h1>hello</h1>
    {/* <Search /> */}
    <div className="ListingWrapper">
    {this.props.listings.map(item => <ListItem listing={item} />)}
    </div>
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps)(Home)

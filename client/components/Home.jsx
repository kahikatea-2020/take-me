import React from 'react'
//redux

// import CategoryList from 'CategoryList'
// import Search from './Search'
import ListItem from './ListItem'

class Home extends React.Component {
  // componentDidMount => dispatch getListings
  render() {
    return (
    <>
    <h1>hello</h1>
    {/* <Search /> */}
    <div className="ListingWrapper">
    {/* {this.props.listings.map(item => <ListItem listing={item} />)} */}
    </div>
    </>
    )
  }
}

export default connect(mapStateToProps)(Home)

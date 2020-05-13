import React from 'react'
import { connect } from 'react-redux'
import { Card, Container, Checkbox, Pagination } from 'semantic-ui-react'
import { isAuthenticated } from 'authenticare/client'

import WaitIndicator from './WaitIndicator'
import SearchBar from './SearchBar'
import ListItem from './ListItem'
import CategoryList from './CategoryList'
import { getListings } from '../actions/listings'
import { getCategories } from '../actions/categories'
// import Pagination from './Pagination'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      checked: false,
      locationAdded: false,
      rerenderer: false, // this is so the correct info displays as pagination can't affect actual state
      page: 1
    }
  }

  componentDidMount () {
    this.props.dispatch(getListings())
    this.props.dispatch(getCategories())
  }

  handleChange = e => {
    e.preventDefault()
    if (!this.state.locationAdded && this.props.user.location) {
      this.addLocation()
    }
    this.setState({ checked: !this.state.checked }, () => {
      this.setState({ rerenderer: !this.state.rerenderer })
    })
  }

  addLocation = () => {
    const location = this.props.user.location.split(', ')[1]
    this.setState({ location, locationAdded: true })
  }

  setPageNum = (e, { activePage }) => this.setState({ page: activePage })

  render () {
    let selectedListings = this.props.listings.sort((a, b) => b.id - a.id)
    selectedListings = selectedListings.filter(listing => !listing.taken)
    if (this.state.checked) {
      selectedListings = selectedListings.filter(listing => listing.location.includes(this.state.location))
    }
    if (this.props.selectedCategory.id && (this.props.selectedCategory.id !== 100)) {
      selectedListings = selectedListings.filter(listing => listing.categoryId === this.props.selectedCategory.id)
    }

    const itemsPerPage = 16
    const { page } = this.state
    const totalPages = selectedListings.length / itemsPerPage
    const listingItems = selectedListings.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage
    )

    return (
      <>
        <SearchBar history={this.props.history}/>
        <div id='toggle' className='ui three column grid' style={{ height: '10vh' }}>
          <div className='row'>
            <h1 className='four wide column' id='latest-listings'>Latest Listings</h1>
            <div className="eight wide column">
              {isAuthenticated() &&
              <Checkbox
                label='Near Me'
                onClick={this.handleChange}
                style={{ marginTop: '10px' }}
                toggle
              />
              }
            </div>
            <div className='four wide right aligned column'>
              <CategoryList history={this.props.history} onChange={this.onChange} />
            </div>
          </div>
        </div>
        <WaitIndicator />
        {selectedListings.length > 0
          ? <>
            <Card.Group itemsPerRow={4} className='centered'>
              {listingItems.map(item => <ListItem key={item.id} listing={item} />)}
            </Card.Group>
            <Container className='center aligned' style={{ paddingTop: '30px' }}>
              <Pagination
                defaultActivePage={1}
                totalPages={totalPages}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                onPageChange={this.setPageNum}
              />
            </Container>
          </>
          : <p>Sorry, there are no current listings to match your search filters</p>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings,
    selectedCategory: state.selectedCategory,
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)

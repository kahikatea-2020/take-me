import React from 'react'
import PropTypes from 'prop-types'
import { Pagination as PaginationSem } from 'semantic-ui-react'

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number
}

const defaultProps = {
  initialPage: 1,
  pageSize: 16
}

class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pager: {} }
  }

  componentDidMount () {
    this.setPage(this.props.initialPage)
    this.props.onChange()
  }

  componentDidUpdate (prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }
  }

  setPage (page) {
    var { items, pageSize } = this.props
    var pager = this.state.pager

    if (page < 1 || page > pager.totalPages) {
      return
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize)

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

    // update state
    this.setState({ pager: pager })

    // call change page function in parent component
    this.props.onChangePage(pageOfItems)
  }

  getPager (totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1

    // default page size is 10
    pageSize = pageSize || 10

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize)

    var startPage, endPage
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }

  changeHandler = (evt, data) => {
    this.setPage(data.activePage)
    this.props.onChange()
  }

  render () {
    var pager = this.state.pager

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null
    }

    return (
      <PaginationSem
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        onPageChange={(event, data) => this.changeHandler(event, data)}
        totalPages={pager.totalPages}
      />
    )
  }
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps
export default Pagination

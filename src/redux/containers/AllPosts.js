import { connect } from "react-redux"

import { getAllPosts } from "../reducers"

import SegmentLatestPosts from "../../large/SegmentLatestPosts"

const mapStateToProps = (state, ownProps = {}) => {
  console.log("mapStateToProps", state)
  console.log("ownProps", ownProps)

  return {
    posts: getAllPosts(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("onClick")
  }
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const AllPosts = connect(
  // Given Redux state, return props
  mapStateToProps,
  // Given Redux dispatch, return callback props
  mapDispatchToProps
)(SegmentLatestPosts)

export default AllPosts

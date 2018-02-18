import { connect } from "react-redux"

import { getAllPosts } from "../actions"

import SegmentLatestPosts from "../../large/SegmentLatestPosts"

const mapStateToProps = state => {
  return {
    dummy: postgetAllPosts(state.posts.all)
  }
}

// create container by connecting
// the store's state to SegmentLatestPosts' props
const AllPosts = connect(mapStateToProps)(SegmentLatestPosts)

export default AllPosts

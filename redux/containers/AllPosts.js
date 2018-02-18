import { connect } from "react-redux"

import { getAllPosts } from "../actions"

import SegmentLatestPosts from "../../src/large/SegmentLatestPosts"

const mapStateToProps = state => ({
  posts: getAllPosts(state.posts.all, state.pagination)
})

// create container by connecting
// the store's state to SegmentLatestPosts' props
const AllPosts = connect(mapStateToProps)(SegmentLatestPosts)

export default AllPosts

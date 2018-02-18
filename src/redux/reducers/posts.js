import initialState from "../stores"

import {
  GET_FEATURED_POSTS,
  GET_ALL_POSTS,
  GET_ALL_TOPICS,
  SELECT_POST,
  SELECT_TOPIC,
  LOADING_TRUE,
  LOADING_FALSE
} from "../actions/types"

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_POSTS:
      return {
        ...state,
        posts: {
          all: action.payload.data
        }
      }
    case GET_ALL_POSTS:
      return action.payload.data
    case GET_ALL_TOPICS:
      return action.payload.topics
    case SELECT_POST:
      return action.payload.data
    case SELECT_TOPIC:
      return action.payload.data
    case LOADING_TRUE:
      return true
    case LOADING_FALSE:
      return false
    default:
      return state
  }
}

import initialState from "../stores"

import {
  // GET_FEATURED_POSTS,
  SAVE_ALL_POSTS,
  SAVE_ALL_TOPICS,
  SELECT_POST,
  SELECT_TOPIC,
  LOADING_TRUE,
  LOADING_FALSE
  // HANDLE_ERROR
} from "../actions/types"

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALL_POSTS:
      return {
        ...state,
        posts: {
          all: action.payload.data
        }
      }
    case SAVE_ALL_TOPICS:
      return {
        ...state,
        topics: {
          all: action.payload.data
        }
      }
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

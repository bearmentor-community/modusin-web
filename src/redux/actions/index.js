import axios from "axios"

import {
  // GET_FEATURED_POSTS,
  SAVE_ALL_POSTS,
  // SAVE_ALL_TOPICS,
  SELECT_POST,
  SELECT_TOPIC,
  SELECT_PROFILE,
  ACCOUNT_REGISTER,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  SET_LOGIN_TOKEN,
  SET_DECODED_ACCOUNT,
  SUBMIT_NEW_POST
  // LOADING_TRUE,
  // LOADING_FALSE,
  // HANDLE_ERROR
} from "./types"

// -----------------------------------------------------------------------------

// what?
// export const requestAllPosts = payload => ({
//   type: REQUEST_ALL_POSTS,
//   payload
// })

// emmit action to save posts data into store's state
export const saveAllPosts = (payload, response) => ({
  type: SAVE_ALL_POSTS,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

// fetch posts data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllPosts = payload => dispatch => {
  return axios
    .get(`http://localhost:3000/posts`)
    .then(rawResponse => {
      return rawResponse.data
    })
    .then(response => {
      return dispatch(saveAllPosts(payload, response))
    })
}

// get all posts for view component's props
export const getAllPosts = state => {
  return state.posts.all
}

// -----------------------------------------------------------------------------

export const selectPost = payload => ({
  type: SELECT_POST,
  payload
})

export const selectTopic = payload => ({
  type: SELECT_TOPIC,
  payload
})

export const selectProfile = payload => ({
  type: SELECT_PROFILE,
  payload
})

// -----------------------------------------------------------------------------

export const submitRegisterData = payload => ({
  type: ACCOUNT_REGISTER,
  payload
})

export const submitLoginData = payload => ({
  type: ACCOUNT_LOGIN,
  payload
})

export const logout = payload => ({
  type: ACCOUNT_LOGOUT,
  payload
})

// -----------------------------------------------------------------------------

export const setToken = payload => ({
  type: SET_LOGIN_TOKEN,
  payload
})

export const setDecodedAccount = payload => ({
  type: SET_DECODED_ACCOUNT,
  payload
})

// -----------------------------------------------------------------------------

export const submitNewPostData = payload => ({
  type: SUBMIT_NEW_POST,
  payload
})

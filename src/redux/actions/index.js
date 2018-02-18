import {
  GET_FEATURED_POSTS,
  GET_ALL_POSTS,
  GET_ALL_TOPICS,
  SELECT_POST,
  SELECT_TOPIC,
  SELECT_PROFILE,
  ACCOUNT_REGISTER,
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  SET_LOGIN_TOKEN,
  SET_DECODED_ACCOUNT,
  SUBMIT_NEW_POST,
  LOADING_TRUE,
  LOADING_FALSE
} from "./types"

// -----------------------------------------------------------------------------

export const getFeaturedPosts = payload => ({
  type: GET_FEATURED_POSTS,
  payload
})

export const getAllPosts = payload => ({
  type: GET_ALL_POSTS,
  payload
})

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

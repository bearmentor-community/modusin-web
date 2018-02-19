import axios from "axios"

import {
  // GET_FEATURED_POSTS,
  SAVE_ALL_POSTS,
  GET_ALL_POSTS,
  SAVE_ALL_TOPICS,
  GET_ALL_TOPICS,
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

import { topics } from "../stores"

// -----------------------------------------------------------------------------

// emit action to save posts data into store's state
export const saveAllPosts = (payload, response) => ({
  type: SAVE_ALL_POSTS,
  payload: {
    data: response.data,
    received_at: Date.now()
  }
})

export const requestAllPosts = payload => ({
  type: `REQUEST_ALL_POSTS`,
  payload
})

// fetch posts data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllPosts = payload => dispatch => {
  dispatch(requestAllPosts(payload))
  return axios
    .get(`http://localhost:3000/posts`)
    .then(rawResponse => {
      return rawResponse.data
    })
    .then(response => {
      return dispatch(saveAllPosts(payload, response))
    })
}

export const getAllPosts = () => ({
  type: GET_ALL_POSTS
})

// -----------------------------------------------------------------------------
// fetch = request => save

// emit action to save topics data into store's state
export const saveAllTopics = (payload, response) => ({
  type: SAVE_ALL_TOPICS,
  payload: {
    data: response, // no need for .data as we get this from local
    received_at: Date.now()
  }
})

export const requestAllTopics = payload => ({
  type: `REQUEST_ALL_TOPICS`,
  payload
})

// fetch topics data from API
// after finished, call SAVE_ALL_POSTS action
export const fetchAllTopics = payload => dispatch => {
  dispatch(requestAllTopics(payload))
  const response = topics.all // initialState.topics.all
  return dispatch(saveAllTopics(payload, response))
}

export const getAllTopics = () => ({
  type: GET_ALL_TOPICS
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

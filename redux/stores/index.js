export const initialState = {
  posts: {
    featured: [],
    all: [],
    selected: {}
  },

  topics: {
    all: {},
    selected: {}
  },

  auth: {
    token: {},
    account: {},
    login: false
  },

  new: {
    title: "",
    content: "",
    createdAt: "",
    updatedAt: ""
  }
}

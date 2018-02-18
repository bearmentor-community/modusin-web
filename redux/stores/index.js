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

  profile: {
    selected: {}
  },

  auth: {
    token: {},
    account: {},
    login: false
  },

  register: {
    name: "",
    email: "",
    password: "",
    loading: false
  },

  login: {
    email: "",
    password: "",
    loading: false
  },

  new: {
    title: "",
    content: "",
    loading: false,
    createdAt: "",
    updatedAt: ""
  }
}

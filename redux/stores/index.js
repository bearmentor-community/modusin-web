export const initialState = {
  posts: {
    featured: [], // array of featured posts
    all: [], // array of posts
    selected: {}
  },

  topics: {
    all: [], // array of topics
    selected: {} // single topic
  },

  profile: {
    selected: {
      username: "", // mhaidarh
      name: "", // M Haidar Hanif
      bio: "", // Educating people through technology to move humanity forward.
      posts: [] // {}
    }
  },

  auth: {
    token: "", // JWT
    account: {}, // decoded JWT
    login: false // true if logged in with JWT
  },

  register: {
    name: "", // input text
    email: "", // input email
    password: "", // input password
    loading: false // when submitting
  },

  login: {
    email: "", // input email
    password: "", // input password
    loading: false // when submitting
  },

  new: {
    title: "", // input title
    content: "", // input textarea
    createdAt: "", // save for notes
    updatedAt: "", // save for notes
    loading: false // when submitting
  }
}

export const posts = {
  featured: [], // array of featured posts
  all: [], // array of posts
  selected: {}
}

export const topics = {
  all: [], // array of topics
  selected: {} // single topic
}

export const profile = {
  selected: {
    username: "", // mhaidarh
    name: "", // M Haidar Hanif
    bio: "", // Educating people through technology to move humanity forward.
    posts: [] // {}
  }
}

export const auth = {
  token: "", // JWT
  account: {}, // decoded JWT
  login: false // true if logged in with JWT
}

export const register = {
  name: "", // input text
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const login = {
  email: "", // input email
  password: "", // input password
  loading: false // when submitting
}

export const newPost = {
  title: "", // input text
  image_url: "", // input text
  content: "", // input textarea
  created_at: "", // save for notes
  updated_at: "", // save for notes
  loading: false // when submitting
}

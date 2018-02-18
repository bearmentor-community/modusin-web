import React from "react"
import { default as Layout } from "../templates/LayoutSingle"

const Create = (props) => (
  <Layout>
    <h3>Create New Post</h3>
    <form>
      <input name="post-content" id="post-title" type="text" />
      <textarea name="post-content" id="post-content" cols="30" rows="100" />
      <input type="button" value="Submit Post" />
    </form>
  </Layout>
)

export default Create

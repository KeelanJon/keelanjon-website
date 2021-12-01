import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import useBlogData from "../hooks/useBlogdata"

function Blog() {
  //   const { title, description } = useSiteMetadata()
  const blogData = useBlogData()

  return (
    <div>
      <h1>Blog CONTENT</h1>
      <div>Imported Query</div>
      {blogData.map(function (item, index) {
        return (
          <div>
            <p>{item.frontmatter.title}</p>
            <p>{item.rawMarkdownBody}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Blog

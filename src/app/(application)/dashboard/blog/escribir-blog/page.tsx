import { WriteBlogPage } from "@dentist/views/dashboard-write-blog"
import { NextPage } from "next"

interface EscriborBlogProps {
  searchParams: {
    blogId?: string
  }
}

const EscriborBlog = ({ searchParams: { blogId } } : EscriborBlogProps) => {
  return <WriteBlogPage  blogId={blogId}/>
}

export default EscriborBlog
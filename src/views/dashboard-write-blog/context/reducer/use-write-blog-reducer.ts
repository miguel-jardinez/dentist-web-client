import { useContext } from "react"
import { WriteBlogContext } from "../write-blog-context"
import { createSlug } from "@dentist/utils/validators"

export const useWriteBlogReducer = () => {
  const { state, dispatch } = useContext(WriteBlogContext)

  const onChangeBlogTitle = (title: string) => {
    dispatch({
      type: 'EDIT_BLOG_TITLE',
      payload: title
    })

    dispatch({
      type: 'EDIT_BLOG_SLUG',
      payload: createSlug(title)
    })
  }

  const onChangeBlogContent = (content: string) => {
    dispatch({
      type: 'EDIT_BLOG_CONTENT',
      payload: content
    })
  }

  const onChangeBlogSlug = (slug: string) => {
    dispatch({
      type: 'EDIT_BLOG_SLUG',
      payload: createSlug(slug)
    })
  }

  const onChangeBlogDescriptionSeo = (description: string) => {
    dispatch({
      type: 'EDIT_BLOG_DESCRIPTION_SEO',
      payload: description
    })
  }

  return {
    state,
    onChangeBlogTitle,
    onChangeBlogContent,
    onChangeBlogSlug,
    onChangeBlogDescriptionSeo
  }
}

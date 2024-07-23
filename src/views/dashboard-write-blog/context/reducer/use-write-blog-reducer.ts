import { useCallback, useContext } from "react"
import { WriteBlogContext } from "../write-blog-context"
import { createSlug } from "@dentist/utils/validators"
import { InitialState } from "./write-blog-reducer"

export const useWriteBlogReducer = () => {
  const { state, dispatch } = useContext(WriteBlogContext)

  const onChangeBlogTitle = useCallback((title: string) => {
    dispatch({
      type: 'EDIT_BLOG_TITLE',
      payload: title
    })

    dispatch({
      type: 'EDIT_BLOG_SLUG',
      payload: createSlug(title)
    })
  }, [dispatch])

  const onChangeBlogContent = useCallback((content: string) => {
    dispatch({
      type: 'EDIT_BLOG_CONTENT',
      payload: content
    })
  }, [dispatch])

  const onChangeBlogSlug = useCallback((slug: string) => {
    dispatch({
      type: 'EDIT_BLOG_SLUG',
      payload: createSlug(slug)
    })
  }, [dispatch])

  const onChangeBlogDescriptionSeo = useCallback((description: string) => {
    dispatch({
      type: 'EDIT_BLOG_DESCRIPTION_SEO',
      payload: description
    })
  }, [dispatch])

  const onChangeBlogFeatureImage = useCallback((urlImage: string) => {
    dispatch({
      type: 'EDIT_BLOG_FEATURE_IMAGE',
      payload: urlImage
    })
  }, [dispatch])

  const onChangeBlogCategory = useCallback((data: Array<{
    id: string;
    name: string;
  }>) => {
    dispatch({
      type: 'EDIT_BLOG_CATEGORIES',
      payload: data,
    })
  }, [dispatch])

  const onFillDataBlog = useCallback((state: InitialState) => {
    dispatch({
      type: 'FILL_BLOG_CONTENT',
      payload: state,
    })
  }, [dispatch])

  const onAddCategory = useCallback((category: { id: string, name: string }) => {
    dispatch({
      type: 'ADD_BLOG_CATEGORY',
      payload: category,
    })
  }, [dispatch])

  return {
    state,
    onChangeBlogTitle,
    onChangeBlogContent,
    onChangeBlogSlug,
    onChangeBlogDescriptionSeo,
    onChangeBlogFeatureImage,
    onChangeBlogCategory,
    onFillDataBlog,
    onAddCategory
  }
}

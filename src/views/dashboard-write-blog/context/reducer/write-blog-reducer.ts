
export interface InitialState {
  blogTitle: string
  blogContent: string
  blogSlug: string
  blogDescriptionSeo: string
}

export const initialState: InitialState = {
  blogContent: '',
  blogTitle: '',
  blogSlug: '',
  blogDescriptionSeo: '',
}

interface EditBlogTitle {
  type: 'EDIT_BLOG_TITLE'
  payload: string
}

interface EdtitBlogContent {
  type: 'EDIT_BLOG_CONTENT'
  payload: string
}

interface EdtitBlogSlug {
  type: 'EDIT_BLOG_SLUG'
  payload: string
}

interface EdtitBlogDescriptionSeo {
  type: 'EDIT_BLOG_DESCRIPTION_SEO'
  payload: string
}

export type ReducerAction = EditBlogTitle | EdtitBlogContent | EdtitBlogSlug | EdtitBlogDescriptionSeo

export const writeBlogReducer = (state: InitialState, action: ReducerAction): InitialState => {
  switch(action.type) {
    case "EDIT_BLOG_TITLE":
      return {...state, blogTitle: action.payload }
    case "EDIT_BLOG_CONTENT":
      return {...state, blogContent: action.payload }
    case "EDIT_BLOG_SLUG":
      return {...state, blogSlug: action.payload }
    case "EDIT_BLOG_DESCRIPTION_SEO":
      return { ...state, blogDescriptionSeo: action.payload }
    default:
      return state
  }
}
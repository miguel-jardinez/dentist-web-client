
export interface InitialState {
  blogId: string
  blogTitle: string
  blogContent: string
  blogSlug: string
  blogDescriptionSeo: string
  blogFeatureImage: string
  categoryList: Array<{ id: string, name: string }>
  blogCategories: Array<{ id: string, name: string }>
}

export const initialState: InitialState = {
  blogId: '',
  blogContent: '',
  blogTitle: '',
  blogSlug: '',
  blogDescriptionSeo: '',
  blogFeatureImage: '',
  categoryList: [],
  blogCategories: []
}

interface FillBlogContent {
  type: 'FILL_BLOG_CONTENT'
  payload: InitialState
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

interface EdtitBlogFeatureImage {
  type: 'EDIT_BLOG_FEATURE_IMAGE'
  payload: string
}

interface EdtitBlogCategory {
  type: 'EDIT_BLOG_CATEGORIES'
  payload: Array<{
    id: string
    name: string
  }>
}

interface AddBlogCategory {
  type: 'ADD_BLOG_CATEGORY',
  payload: {
    id: string
    name: string
  }
}

export type ReducerAction = 
  EditBlogTitle | 
  EdtitBlogContent | 
  EdtitBlogSlug | 
  EdtitBlogDescriptionSeo | 
  EdtitBlogFeatureImage | 
  EdtitBlogCategory | 
  AddBlogCategory |
  FillBlogContent;

export const writeBlogReducer = (state: InitialState, action: ReducerAction): InitialState => {
  switch(action.type) {
    case "FILL_BLOG_CONTENT":
      return { ...action.payload }
    case "EDIT_BLOG_TITLE":
      return {...state, blogTitle: action.payload }
    case "EDIT_BLOG_CONTENT":
      return {...state, blogContent: action.payload }
    case "EDIT_BLOG_SLUG":
      return {...state, blogSlug: action.payload }
    case "EDIT_BLOG_DESCRIPTION_SEO":
      return { ...state, blogDescriptionSeo: action.payload }
    case "EDIT_BLOG_FEATURE_IMAGE":
      return { ...state, blogFeatureImage: action.payload }

    case "ADD_BLOG_CATEGORY":
      return {...state, categoryList: [...state.categoryList, action.payload]}
    case "EDIT_BLOG_CATEGORIES": {
      return { ...state, blogCategories: action.payload }
    }
    default:
      return state
  }
}
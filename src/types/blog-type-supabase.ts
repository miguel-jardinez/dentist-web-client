export interface BlogSupabase {
  author_id: string | null;
  content: string | null;
  created_at: string;
  description: string | null;
  feature_image: string | null;
  id: string;
  is_premium: boolean | null;
  is_published: boolean | null;
  slug: string | null;
  title: string | null;
  category_blog?: {
    category: {
      category: string | null;
      created_at: string;
      id: string;
  } | null;
  }[];
  user?: {
    email: string | null
  } | null;
}

export interface Blog {
  content: string;
  createdAt: string;
  id: string;
  published: boolean;
  isPremium: boolean;
  featureImage: string;
  description: string;
  title: string;
  slug: string,
  categoryBlog: {
    category: {
      id: string,
      category: string,
    }
  }[],
  user: {
    email: string
  }
}

export const blogMapper = (data: BlogSupabase): Blog => {
  return {
    content: data.content ?? '',
    createdAt: data.created_at ?? '',
    id: data.id,
    featureImage: data.feature_image ?? '',
    slug: data.slug ?? '',
    description: data.description ?? '',
    published: data.is_published ?? false,
    isPremium: data.is_premium ?? false,
    title: data.title ?? '',
    categoryBlog: data.category_blog?.map(({ category }) => ({ category: { category: category?.category ?? '', id: category?.id ?? '' } })) ?? [],
    user: {
      email: data.user?.email ?? '',
    }
  }
}

export const blogListMapper = (data: BlogSupabase[]) : Blog[] => {
  return data.map((item) => ({
      content: item.content ?? '',
      createdAt: item.created_at ?? '',
      id: item.id,
      featureImage: item.feature_image ?? '',
      published: item.is_published ?? false,
      isPremium: item.is_premium ?? false,
      slug: item.slug ?? '',
      description: item.description ?? '',
      categoryBlog: item.category_blog?.map(({ category }) => ({ category: { category: category?.category ?? '', id: category?.id ?? '' } })) ?? [],
      title: item.title ?? '',
      user: {
        email: item.user?.email ?? '',
      }
    })
  )
}
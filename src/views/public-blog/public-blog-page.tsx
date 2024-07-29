import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { PublicBlogCard } from "./components/public-blog-card"
import { blogMapper } from "@dentist/types/blog-type-supabase"

export const PublicBlogPage = async () => {
  const { data } = await supabaseServerClient()
    .from('blog')
    .select()
    .order('created_at', { ascending: true })
    .eq('published', true)
    .limit(12)

  return (
    <main className='container m-auto h-full'>
      <div className='pt-28'>
        <h1 className="text-center mb-10 text-red-400">Nuetras publicaciones</h1>

        <div className="grid grid-cols-3 gap-4">
          {
            data?.map((blog) => <PublicBlogCard blogData={blogMapper(blog)} key={blog.id} />
            )
          }
        </div>
      </div>
    </main>
  )
}

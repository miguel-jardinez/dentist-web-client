import Image from "next/image"
import "react-quill/dist/quill.snow.css"
import '../../components/quill-editor/quill-editor-styles.css'

interface DashboardBlogContentPageProps {
  blogData : BlogDataState | null
}

interface BlogDataState {
  author_id: string | null;
  content: string | null;
  created_at: string;
  description: string | null;
  id: string;
  published: boolean | null;
  slug: string | null;
  title: string | null;
  feature_image: string | null;
}

export const DashboardBlogContentPage = ({ blogData } : DashboardBlogContentPageProps) => {
  return (
    <section className="pt-16">
      <Image
        alt={blogData?.title ?? ''}
        src={blogData?.feature_image ?? ''}
        width={1024}
        height={500}
        className="w-full h-[30rem] object-cover mb-10"
      />
      <div className="max-w-screen-md m-auto">
        <div className="mb-10">
          <h1>{blogData?.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData?.content ?? '' }} />
      </div>
    </section>
  )
}

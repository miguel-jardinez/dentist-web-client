import Image from "next/image"
import "react-quill/dist/quill.snow.css"
import '../../components/quill-editor/quill-editor-styles.css'
import { Blog } from "@dentist/types/blog-type-supabase"

interface DashboardBlogContentPageProps {
  blogData : Blog
}

export const DashboardBlogContentPage = ({ blogData } : DashboardBlogContentPageProps) => {
  return (
    <section className="pt-16">
      <Image
        alt={blogData.title}
        src={blogData.featureImage}
        width={1024}
        height={500}
        className="w-full h-[30rem] object-cover mb-10"
      />
      <div className="max-w-screen-md m-auto">
        <div className="mb-10">
          <h1>{blogData?.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{__html: blogData}} />
      </div>
    </section>
  )
}

import { BlogTextEditor } from "./components/blog-text-editor"
import { SettingsBlogEditor } from "./components/settings-blog-editor"
import { WriteBlogHeader } from "./components/write-blog-header"
import { WriteBlogProvider } from "./context/write-blog-provider"

export const WriteBlogPage = () => {
  return (
    <WriteBlogProvider>
      <WriteBlogHeader />
      <div className="bg-white h-[90%] flex">
        <BlogTextEditor />
        <SettingsBlogEditor />
      </div>
    </WriteBlogProvider>
  )
}

import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import './blog-content.css'
import { useEffect } from "react";

interface BlogContentProps {
  content: any
}

const BlogContent = ({ content } : BlogContentProps) => {
  const editor = useCreateBlockNote();

  const parseHtmlToBlocks = async (content: string) => {
    try {
      const data = await editor.tryParseHTMLToBlocks(content)
      console.log({data})

      editor.replaceBlocks(editor.document, data)
    } catch(e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    console.log({content})

    if (content) {
      parseHtmlToBlocks(content)
    }
  }, [content])

  return (
    <BlockNoteView editable={false} theme="light" editor={editor} />
  )
}

export default BlogContent;
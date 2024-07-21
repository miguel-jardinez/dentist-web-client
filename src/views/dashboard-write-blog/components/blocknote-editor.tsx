"use client"; 

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from 'react';
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer";
import { replaceSpecialCaracters } from "@dentist/utils/validators";

interface BlockNoteEditorProps {
  content?: string | null
}

const BlockNoteEditor = ({ content } : BlockNoteEditorProps) => {
  const { onChangeBlogContent, onChangeBlogDescriptionSeo } = useWriteBlogReducer()
  const editor = useCreateBlockNote();

  const convertContentToBlocks = async (content: string) => {
    try {
      const blocks = await editor.tryParseHTMLToBlocks(content)
      editor.replaceBlocks(editor.document, blocks)
    } catch(e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {

    if (content) {
      convertContentToBlocks(content)
    }

  }, [content, editor])

  const onChangeDataEditor = async (data: typeof editor.document) => {
    try {
      const htmlData = await editor.blocksToHTMLLossy(data)
      const markdown = await editor.blocksToMarkdownLossy(data)

      onChangeBlogContent(htmlData)
      if (!content) {
        onChangeBlogDescriptionSeo(replaceSpecialCaracters(markdown))
      }

    } catch(e: any) {
      console.log(e.message)
    }
  }

  return <BlockNoteView 
    theme="light"

    editor={editor} 
    onChange={() => onChangeDataEditor(editor.document)}
  />;
}

export default BlockNoteEditor;

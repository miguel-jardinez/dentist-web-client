'use client'

import { useEffect, useRef } from 'react'
import EditorJS, { OutputBlockData } from '@editorjs/editorjs';

import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import EditorImage from "@editorjs/image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";


interface BlogEditorJsProps {
  holder: string,
  onChange: (blocks: OutputBlockData<string, any>[]) => void,
  data: any
}

const EDITOR_TOOLS = {
  checkList: CheckList,
  header: Header,
  paragraph: Paragraph,
  delimiter: Delimiter,
  embed: Embed,
  image: SimpleImage,
  list: List,
  quote: Quote
} 

const BlogEditorJs = ({ holder, data, onChange }: BlogEditorJsProps) => {
  const ref = useRef<EditorJS>()

  useEffect(() => {
    if(!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        data,
        tools: EDITOR_TOOLS,
        async onChange(api, _) {
          const content = await api.saver.save()

          console.log({content})
          onChange(content.blocks)
        }
      });

      ref.current = editor;
    }

    return (() => {
      if (ref.current && ref.current.destroy) {
        ref.current?.destroy();
      }
    })
  }, [data, holder])

  return (
    <div 
      id={holder} 
    />
  )
}

export default BlogEditorJs;

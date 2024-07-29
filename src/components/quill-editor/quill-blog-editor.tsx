'use client'

import { convert } from 'html-to-text'
import { useMemo } from 'react';

import './quill-editor-styles.css'
import QuillEditor, { Quill } from 'react-quill';
import { useWriteBlogReducer } from '@dentist/views/dashboard-write-blog/context/reducer/use-write-blog-reducer';
import { QuillToolBar } from './quill-tool-bar';

interface QuillBlogEditorProps {
  value: string
}

const FontAttributor = Quill.import('attributors/class/font');
FontAttributor.whitelist = [
  'lora',
  'roboto',
  'montserrat',
];
Quill.register(FontAttributor, true);


const QuillBlogEditor = ({ value } : QuillBlogEditorProps) => {
  const { onChangeBlogContent, onChangeBlogDescriptionSeo, state } = useWriteBlogReducer()

  const quillModule = useMemo(() => ({
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true
    },
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'font': [  
          'lora',
          'roboto',
          'montserrat',
        ] }],
        ["bold", "italic", "underline", "blockquote"],
        ['link', 'image', 'video'],
        [{ 'align': [] }],
        [{ 'color': [] }],
        ['clean']
      ]
    },
    clipboard: {
      matchVisual: true,
    },
  }), [])

  const onUpdateBlogContent = (content: string) => {
    onChangeBlogContent(content)

    if(!state.blogDescriptionSeo) {
      onChangeBlogDescriptionSeo(convert(content))
    }
  }

  return (
    <div className='relative'>
      <QuillToolBar toolBarId='t1' />
      <QuillEditor
        value={state.blogContent ?? ''}
        theme='snow'
        modules={{ toolbar: { container: '#t1' } }}
        onChange={(e) => onUpdateBlogContent(e)}
        placeholder='Escribe aquí tu nuevo blog'
      />
    </div>
  )
}

export default QuillBlogEditor
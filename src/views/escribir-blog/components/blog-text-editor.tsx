'use client'
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Input } from "@dentist/components/ui/input";

export const BlogTextEditor = () => {
  const editor = useCreateBlockNote();

  return (
    <div>
      <div className="max-h-[10%] mb-3">
        <Input
          className="border-0 bg-transparent h-full text-3xl font-bold focus-visible:ring-0 focus-visible:outline-none"
          placeholder="Titulo del blog" 
        />
      </div>
      <div className="max-h-[90%] overflow-scroll">
        <BlockNoteView 
          title="Hola mundo"
          theme="light"
          editor={editor} 
        />
      </div>
    </div>
  );
}

'use client'

import Image from "next/image"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"

export const FeatureImage = () => {
  const { state } = useWriteBlogReducer()
  return (
    <>
      {state.blogFeatureImage && (<Image
        alt={`feature_image`}
        src={state.blogFeatureImage ?? '/'}
        width={200}
        height={100}
      />)}
    </>
  )
}

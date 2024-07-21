import { supabaseServerClient } from '@dentist/utils/supabase/server-client'
import { LayoutMetadataSection } from './layout-metadata-section'
import Image from 'next/image'

export const FeatureImageBlog = async () => {
  const data = await supabaseServerClient()
    .from('blog')
    .select(`title, feature_image`)
    .single()

  return (
    <LayoutMetadataSection
      title='Feature Image'
    >
      <Image
        alt={`feature_image_${data.data?.title}`}
        src={data.data?.feature_image ?? ''}
        width={200}
        height={100}
      />
    </LayoutMetadataSection>
  )
}

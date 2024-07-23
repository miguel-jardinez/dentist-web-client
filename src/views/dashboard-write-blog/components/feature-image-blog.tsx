import { supabaseServerClient } from '@dentist/utils/supabase/server-client'
import { FeatureImage } from './feature-image'
import { FeatureImageButton } from './feature-image-button'
import { LayoutMetadataSection } from './layout-metadata-section'

interface FeatureImageBlogProps {
  image?: string | null
}

export const FeatureImageBlog = async ({ image } : FeatureImageBlogProps) => {
  const storageData = await supabaseServerClient()
    .storage
    .from('blog-bucket')
    .list('features', {
      limit: 20,
      offset: 0,
      sortBy: { column: 'created_at', order: 'asc' }
    })

  const response = storageData.data?.map((image) => {
    const publicUrl = supabaseServerClient().storage.from('blog-bucket').getPublicUrl(`features/${image.name}`)

    return {
      ...image,
      url: publicUrl.data.publicUrl,
    }
  })

  return (
    <LayoutMetadataSection
      title='Feature Image'
    >
      <FeatureImage />
      <FeatureImageButton images={response} />
    </LayoutMetadataSection>
  )
}

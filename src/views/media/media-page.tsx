import { DashboardLayout } from "@dentist/components/dashboard"
import { MediaGallery } from "@dentist/components/media-gallery/media-gallery"
import { supabaseServerClient } from "@dentist/utils/supabase/server-client"

export const MediaPage = async () => {
  const data = await supabaseServerClient()
    .storage.from('blog')
    .list('feature', {
      limit: 12,
      offset: 0
    }).then((data) => {
      
      return data.data?.map((item) => {
        const url = supabaseServerClient().storage.from('blog').getPublicUrl(`feature/${item.name}`)
        return {
          ...item,
          url: url.data.publicUrl
        }
      })

    })

  return (
    <DashboardLayout>
      <MediaGallery images={data} />
    </DashboardLayout>
  )
}

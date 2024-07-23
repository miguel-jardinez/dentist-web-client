'use client'

import { MediaGallery } from "@dentist/components/media-gallery/media-gallery"
import { useModal } from "@dentist/components/providers/modal/use-modal"
import { Button } from "@dentist/components/ui/button"

interface FeatureImageButtonProps {
  images: {
    url: string;
    name: string;
    bucket_id: string;
    owner: string;
    id: string;
    updated_at: string;
    created_at: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
    buckets: any;
  }[] | undefined 
}

export const FeatureImageButton = ({ images } : FeatureImageButtonProps) => {
  const { onOpenModal } = useModal()

  return (
    <Button onClick={() => onOpenModal(<MediaGallery images={images} />)} variant="secondary" className="w-full">
      Seleccionar imagen
    </Button>
  )
}

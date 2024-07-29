'use client'

import { formatDayMonthYear } from "@dentist/utils/date-formats";
import { supabaseBrowserClient } from "@dentist/utils/supabase/browser-client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import slugify from 'slugify';
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { revalidateImageResponse } from "./actions";


interface ImageBucket {
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
}


interface MediaGalleryImages {
  images?: Array<ImageBucket>
  onAssetSelected?: (imageId: string) => void
}

export const MediaGallery = ({ images, onAssetSelected } : MediaGalleryImages) => {
  const [imageUploaded, setImageUploaded] = useState(false);

  const inputMediaRef = useRef<HTMLInputElement>(null)
  const [selected, setSelected] = useState<ImageBucket | null>(null)

  const onSelectImage = (image: ImageBucket) => {
    onAssetSelected?.(image.id)
    setSelected(image)
  }
  
  const handleUpdateMedia = () => {
    if (inputMediaRef.current) {
      inputMediaRef.current.click()
    }
  }

  const updateImage = async (fileList: FileList | null) => {
    if (!fileList) return;
    
    try {
      const images = Array.from(fileList)

      for (const file of images) {
        const fileType = file.name.split('.').pop()
        const fileName = slugify(file.name.split('.')[0], '_')
        setImageUploaded(false)

        const response = await supabaseBrowserClient()
          .storage
          .from('blog')
          .upload(`feature/${fileName}-${Date.now()}.${fileType}`, file)

        if (!response.error) {
          setImageUploaded(true)
        }
      }

    } catch(e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    revalidateImageResponse()
  }, [imageUploaded])

  return (
    <div className="h-full">
      <div className="flex items-center justify-between h-[10%]">
        <h4>Galería de medios</h4>
        <Input 
          value={''} 
          onChange={(e) => updateImage(e.target.files)} 
          ref={inputMediaRef} 
          className="hidden" 
          type="file"
          multiple
        /> 
        <Button variant="blue" onClick={handleUpdateMedia} size="lg" className="flex items-center">
          Subir Medio
          <IoMdCloudUpload size={25} className="ml-3" />
        </Button>
      </div> 
      <div className="flex h-[90%]">
        <div className="flex-1 h-full overflow-y-scroll">
          <div className="grid grid-cols-4 grid-rows-3 gap-3  overflow-scroll">
            {
              images?.map((image) => (
                <Card key={image.id}>
                  <CardContent className="p-0">
                    <Image
                      onClick={() => onSelectImage(image)}
                      alt={image.name}
                      src={image.url}
                      width={500}
                      height={200}
                      className="aspect-square object-cover"
                    />
                  </CardContent>
                  <CardFooter className="p-2 text-ellipsis overflow-hidden truncate">
                    {image.name}
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
        {
          selected &&  (
            <div className="w-1/3 px-4">
              <Image 
                alt={selected.name}
                src={selected.url}
                width={500}
                height={200}
                className="mb-5 aspect-square object-cover"
              />

              <p>Nombre: {selected.name}</p>
              <p>Fecha: {formatDayMonthYear(selected.created_at)}</p>
              <p>Tipo: {selected.metadata.mimetype}</p>
              
              <div className="space-x-4 my-5">
                <Button variant="secondary" onClick={() => navigator.clipboard.writeText(selected.url)}>Obtener URL</Button>
                <Button variant="destructive" className="">
                  Eliminar
                  <MdDeleteOutline size={20} />
                </Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

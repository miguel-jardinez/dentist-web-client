'use client'

import { formatDayMonthYear } from "@dentist/utils/date-formats";
import { useWriteBlogReducer } from "@dentist/views/dashboard-write-blog/context/reducer/use-write-blog-reducer";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useModal } from "../providers/modal/use-modal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
}

export const MediaGallery = ({ images } : MediaGalleryImages) => {
  const { onCloseModal } = useModal()
  const { onChangeBlogFeatureImage, state } = useWriteBlogReducer()
  const inputMediaRef = useRef<HTMLInputElement>(null)
  const [selected, setSelected] = useState<ImageBucket | null>(null)

  const onSelectImage = (image: ImageBucket) => {
    setSelected(image)
  }
  
  const handleUpdateMedia = () => {
    if (inputMediaRef.current) {
      inputMediaRef.current.click()
    }
  }

  const onSelecteFeatureImage = (url: string) => {
    onChangeBlogFeatureImage(url)
    onCloseModal()
  }

  const updateImage = async (e: FileList | null) => {
    console.log(e)
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between h-[10%]">
        <h4>Galería de medios</h4>
        <Input accept="image/*" onChange={(e) => updateImage(e.target.files)} ref={inputMediaRef} className="hidden" type="file" /> 
        <Button variant="blue" onClick={handleUpdateMedia} size="lg" className="flex items-center">
          Subir Medio
          <IoMdCloudUpload size={25} className="ml-3" />
        </Button>
      </div> 
      <div className="flex h-[90%]">
        <div className="flex-1 h-full overflow-y-scroll">
          <div className="grid grid-cols-3 grid-rows-3 gap-3  overflow-scroll">
            {
              images?.map((image) => (
                <div key={image.id}>
                  <Image
                    onClick={() => onSelectImage(image)}
                    alt={image.name}
                    src={image.url}
                    width={500}
                    height={200}
                    className="aspect-video"
                  />
                </div>
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
                className="mb-5 aspect-video"
              />

              <p>Nombre: {selected.name}</p>
              <p>Fecha: {formatDayMonthYear(selected.created_at)}</p>
              <p>Tipo: {selected.metadata.mimetype}</p>
              
              <div className="space-x-4 my-5">
                <Button onClick={() => onSelecteFeatureImage(selected.url)} variant="blue">Seleccionar</Button>
                <Button variant="secondary">Obtener URL</Button>
              </div>

              <div>
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

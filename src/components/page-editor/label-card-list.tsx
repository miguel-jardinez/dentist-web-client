'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

interface LabelCardListProps {
  id: string
}

export const LabelCardList = ({ id } : LabelCardListProps) => {
  const router = useRouter()
  const [labels, setLabels] = useState([]);

  const onEditLabel = (id: string) => {
    const url = new URL(window.location.href)
    url.searchParams.append('labelid', id)

    router.push(`${url.pathname}/create-label-content/${url.search}`)
  }

  const getLabels = async () => {
    // const data = await getLabelsByPageId(id)

    // setLabels(data?.data as any ?? [])
  }

  useEffect(() => {
    getLabels()
  }, [id])

  return (
    <>
      <div>LabelCardList</div>
      <div className="my-3">
        {/* {
          labels.map((item) => {
            return(
              <article onClick={() => onEditLabel(item.id)} className="my-3 first:mt-0 last:mb-0 cursor-pointer ring-1 rounded-md px-8 py-4" key={item.id}>
                <p>{item.label_id}</p>
              </article>
            )
          })
        } */}
      </div>
    </>
  )
}

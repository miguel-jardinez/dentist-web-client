'use client'
import { LabelCardList } from "@dentist/components/page-editor"
import { Button } from "@dentist/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

export const EditorPage = () => {
  const params = useParams<{ id: string }>()

  return (
    <section>
      <div className="bg-white p-5 rounded-md">
        <h3 className="mb-3">Labels:</h3>

        <LabelCardList id={params?.id ?? ""} />

        <Link href={`/dashboard/content/page/${params?.id}/create-label-content`}>
          <Button className="w-full" variant="outline">
            Añadir label
          </Button>
        </Link>
      </div>
    </section>
  )
}

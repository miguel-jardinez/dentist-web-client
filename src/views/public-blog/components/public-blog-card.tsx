'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@dentist/components/ui/card";
import { Blog } from "@dentist/types/blog-type-supabase";
import { formatDayMonthYear } from '@dentist/utils/date-formats';
import { useRouter } from "next/navigation";

interface PublicBlogCardProps {
  blogData: Blog
}

export const PublicBlogCard = ({
  blogData
} : PublicBlogCardProps) => {
  const router = useRouter()

  const handleNavigate = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <Card className="cursor-pointer" onClick={() => handleNavigate(blogData.slug)}>
      <CardHeader>
        <CardTitle>{blogData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{blogData.description}</p>
      </CardContent>
      <CardFooter>
        {formatDayMonthYear(blogData.createdAt)}
      </CardFooter>
    </Card>
  )
}

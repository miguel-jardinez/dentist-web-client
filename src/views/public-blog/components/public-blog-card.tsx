'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@dentist/components/ui/card";
import { formatDayMonthYear } from '@dentist/utils/date-formats';
import { useRouter } from "next/navigation";

interface PublicBlogCardProps {
  author_id: string | null;
  content: string | null;
  description: string | null;
  created_at: string;
  id: string;
  published: boolean | null;
  slug: string | null;
  title: string | null;
}

export const PublicBlogCard = ({ 
  author_id,
  content,
  created_at,
  id,
  published,
  description,
  slug,
  title,
} : PublicBlogCardProps) => {
  const router = useRouter()

  const handleNavigate = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <Card className="cursor-pointer" onClick={() => handleNavigate(slug ?? '')}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        {formatDayMonthYear(created_at)}
      </CardFooter>
    </Card>
  )
}

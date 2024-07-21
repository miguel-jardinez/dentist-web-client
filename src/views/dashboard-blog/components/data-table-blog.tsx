'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@dentist/components/ui/table";
import { formatDayMonthYear } from "@dentist/utils/date-formats";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";


interface DataTableBlogProps {
  author_id: string | null;
  content: string | null;
  created_at: string;
  id: string;
  published: boolean | null;
  title: string | null;
  profile: {
    email: string | null
  } | null
}

const columns: ColumnDef<DataTableBlogProps>[] = [
  {
    accessorKey: 'title',
    header: 'Título'
  },
  {
    accessorKey: 'created_at',
    header: 'Creado en'
  },
  {
    accessorKey: 'published',
    header: 'Publicado'
  },
]

interface DataTableBlogProps {
  author_id: string | null;
  content: string | null;
  created_at: string;
  id: string;
  published: boolean | null;
  title: string | null;
}

export const DataTableBlog = ({
  data
}: { data: DataTableBlogProps[] }) => {
  const router = useRouter()

  const onNavigateToBlog = (id: string) => {
    router.push(`/dashboard/blog/escribir-blog?blogId=${id}`)
  }

  return (
    <div className="overflow-scroll h-[90%]">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((item) => (
              <TableHead key={item.id}>{item.header?.toString()}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          { data.map((item) => (
            <TableRow onClick={() => onNavigateToBlog(item.id)} key={item.id}>
              <TableCell className="text-red-400 font-semibold underline cursor-pointer">
                {item.title?.slice(0, 20)}...
              </TableCell>
              <TableCell>{formatDayMonthYear(item.created_at)}</TableCell>
              <TableCell>{item.profile?.email}</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </div>
  )
}

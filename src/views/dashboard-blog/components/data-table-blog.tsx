'use client'

import { Button } from "@dentist/components/ui/button";
import { Checkbox } from "@dentist/components/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@dentist/components/ui/dropdown-menu";
import { Input } from "@dentist/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@dentist/components/ui/table";
import { Blog } from "@dentist/types/blog-type-supabase";
import { formatDayMonthYear } from "@dentist/utils/date-formats";
import { RequestStateEnum } from "@dentist/utils/response-state";
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, useReactTable } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteBlog } from "../actions";
import { LuArrowDownUp } from "react-icons/lu";

interface DataTableBlogProps {
  data: Blog[]
}

export const DataTableBlog = ({
  data
}: DataTableBlogProps) => {
  const router = useRouter()
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 8
  })
  
  const onDeleteBlog = async (blogId: string) => {
    try {
      const response = await deleteBlog(blogId)

      switch(response.type) {
        case RequestStateEnum.SUCCESS: {
          console.log(response.data)
        }
        case RequestStateEnum.ERROR: {
          console.log(response.type)
        }
        case RequestStateEnum.LOADING: {

        }
      }
    } catch(e: any) {
      console.log(e)
    }
  }

  const columns: ColumnDef<Blog>[] = [
    {
      id: 'blog id',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "title",
      header: "Titulo",
      id: 'titulo',
      cell: ({ row }) => (
        <div className="capitalize">{row.original.title ? row.original.title : 'Blog sin tíitulo'}</div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: 'Creado',
      id: 'creado',
      cell: ({ row }) => (
        <div className="capitalize">{formatDayMonthYear(row.original.createdAt)}</div>
      )
    },
    {
      accessorKey: 'Categoría',
      header: 'Categoría',
      id: 'categoría',
      cell: ({ row }) => (
        <div className="capitalize">{row.original.isPremium ? 'Premium' : 'Gratuito'}</div>
      )
    },
    {
      accessorKey: 'Autor',
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <LuArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      ),
      id: 'author',
      cell: ({ row }) => {
        return (
        <div>{row.original.user.email}</div>
      )}
    },
    {
      accessorKey: 'published',
      id: 'publicado',
      header: () => <div className="text-right">Estado</div>,
      cell: ({ row }) => (
        <div className="text-right">{row.original.published ? 'Publicado' : 'Borrador'}</div>
      )
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const blogData = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <BsThreeDotsVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(blogData.id)}
              >
                Copiar Blog ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onDeleteBlog(blogData.id)}>Eliminar blog</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push(`blog/escribir-blog?blogId=${blogData.id}`)}
              >
                  Editar Blog
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination
    }
  })

  return (
    <div className="h-[90%] w-full">
      <div className="flex items-center mb-4">
        <Input
          placeholder="Busca tu blog"
          value={(table.getColumn("titulo")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("titulo")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                console.log(column)
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          {
            table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {
                  headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })
                }
              </TableRow>
            ))
          }
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

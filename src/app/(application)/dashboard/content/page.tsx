import { getPagesServerAction } from '@dentist/pages/dashboard/actions'
import { Button } from '@dentist/components/ui/button'
import { Input } from '@dentist/components/ui/input'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { ContentPage } from '@dentist/pages/dashboard/content-page'

const Content = async () => {
  const data = await getPagesServerAction()

  console.log(data)

  return <ContentPage />
}

export default Content
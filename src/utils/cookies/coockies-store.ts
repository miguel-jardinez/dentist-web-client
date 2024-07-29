'use server'
import { cookies } from 'next/headers'
import { CookiesNameEnum } from './cookies-types'

export { cookies } from 'next/headers'

export const getCoockieString = (name: CookiesNameEnum) => {
  const coockiesStore = cookies()

  return coockiesStore.get(name)
}

export const setCookieString = (name: CookiesNameEnum, value: string) => {
  const coockiesStore = cookies()

  coockiesStore.set(name, value)
}

export const setCookieObject = (name: CookiesNameEnum, value: any) => {
  const coockiesStore = cookies()

  coockiesStore.set(name, JSON.stringify(value))
}
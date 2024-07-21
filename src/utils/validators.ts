const onlyAlphabetic = new RegExp('^[a-zA-Z0-9]', 'g')

export const replaceSpecialCaracters = (content: string) => {
  return content.replaceAll(onlyAlphabetic, '').replaceAll(/[\r\n]+/g, ' ').trim()
}

export const createSlug = (content: string) => {
  return content.toLocaleLowerCase().replaceAll(' ', '-')
}
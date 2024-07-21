import dayjs from 'dayjs'
import 'dayjs/locale/es';

dayjs.locale('es')

export const formatDayMonthYear = (date: string) => {
  const dataDate = dayjs(date)
  return dataDate.format('DD MMMM YYYY')
}
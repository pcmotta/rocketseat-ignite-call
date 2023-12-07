import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import 'dayjs/locale/pt-br'

dayjs.extend(isToday)
dayjs.locale('pt-br')

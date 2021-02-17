console.log('test')
// 1
// import { format, compareAsc } from 'date-fns'
// 2
import format from 'date-fns/format'
import compareAsc from 'date-fns/compareAsc'

format(new Date(2014, 1, 11), 'MM/dd/yyyy')

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
import dateFormat from 'dateformat'

const getCurrentDate = () => {
  return dateFormat(Date.now(), 'd mmmm')
}

export default getCurrentDate

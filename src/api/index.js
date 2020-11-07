import { find, propEq } from 'ramda'
import request from 'superagent'

import categories from 'api/mockCategories'

export const fetchPhones = async () => {
  const { body } = await request.get(
    'https://run.mocky.io/v3/91b9701b-c5bc-4893-b5c4-c198d2bb1b88'
  )
  return body.phones
}

export const loadMorePhones = async ({ offset }) => {
  console.log(offset)
  // a method for downloading additional phones will be added here (but it's not exactly..)
  const { body } = await request.get(
    'https://run.mocky.io/v3/91b9701b-c5bc-4893-b5c4-c198d2bb1b88'
  )
  return body.phones
}

export const fetchPhoneById = async id => {
  const { body } = await request.get(
    'https://run.mocky.io/v3/91b9701b-c5bc-4893-b5c4-c198d2bb1b88'
  )

  return find(propEq('id', id), body.phones)
}

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    resolve(categories)
  })
}

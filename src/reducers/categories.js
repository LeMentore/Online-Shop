import { mergeRight, indexBy, prop } from 'ramda'

import {
  FETCH_CATEGORIES_SUCCESS,
} from 'actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = indexBy(prop('id'), payload)
      return mergeRight(state, newValues)
    default:
      return state
  }
}

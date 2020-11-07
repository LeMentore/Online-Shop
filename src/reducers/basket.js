import { append, without } from 'ramda'
import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from 'actionTypes'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return append(payload, state)
    case REMOVE_PHONE_FROM_BASKET:
      return without([payload], state)
    case CLEAN_BASKET:
      return initialState
    default:
      return state
  }
}

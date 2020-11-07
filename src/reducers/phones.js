import { indexBy, prop, mergeRight, assoc } from 'ramda'
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, FETCH_PHONE_BY_ID_SUCCESS } from 'actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return mergeRight(state, indexBy(prop('id'), payload))
    case LOAD_MORE_PHONES_SUCCESS:
      return mergeRight(state, indexBy(prop('id'), payload))
    case FETCH_PHONE_BY_ID_SUCCESS:
      return assoc(payload.id, payload, state)
    default:
      return state
  }
}

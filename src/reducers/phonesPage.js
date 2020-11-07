import { pluck, concat, mergeRight } from 'ramda'
import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE } from 'actionTypes'

const initialState = {
  ids: [],
  search: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return mergeRight(state, {
        ids: pluck('id', payload)
      })
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = pluck('id', payload)
      return mergeRight(state, {
        ids: concat(state.ids, ids)
      })
    case SEARCH_PHONE:
      return mergeRight(state, {
        search: payload
      })
    default:
      return state
  }
}

import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps)
  const applySearch = item => R.includes(
    state.phonesPage.search.toLowerCase(),
    item.name.toLowerCase()
  )

  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  )

  return R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPage.ids)
}

export const getRenderedPhonesLength = state => state.phonesPage.ids.length

export const getTotalBasketCount = state => state.basket.length

export const getTotalBasketPrice = state => {
  return R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getPhoneById(state, id))
  )(state.basket)
}

export const getCategories = state => R.values(state.categories)

export const getActiveCategoryId = ownProps => R.path(['params', 'id'], ownProps.match)

export const getBasketPhonesWithCount = state => {
  const uniqueIds = R.uniq(state.basket)

  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)

  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)

  return R.compose(
    R.map(phoneWithCount),
    R.map(id => getPhoneById(state, id))
  )(uniqueIds)
}

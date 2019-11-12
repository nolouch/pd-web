import cond from 'redux-cond'
import { PDStores, PDStoresAction, PDStoresTypes } from 'types/stores'

import { Reducer } from 'redux'

export const defaultState = { stores: [] }

const stores: Reducer<PDStores, PDStoresAction> = (state = defaultState, action) =>
  cond(PDStoresTypes.GET_ALL_STORES, (state: PDStores) => ({ ...state, stores: action.stores }))(state, action)

export default stores

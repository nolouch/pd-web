import { PDStoresTypes } from 'types/stores'
import makeActionCreator from 'lib/makeActionCreator'

const getPDStores = makeActionCreator(PDStoresTypes.GET_ALL_STORES, 'stores')

export { getPDStores }

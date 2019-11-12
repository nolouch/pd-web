import * as actions from 'actions/stores'

import { PDStore, PDStoresAction } from 'types/stores'

import { http } from './config'

const getPDStores = (): ThunkResult<void, PDStoresAction> => dispatch =>
  http.get('/stores').then(resp => {
    const data: PDStore[] = resp.data.stores.map(({ store, status }: any) => {
      store.status = status
      return store
    })

    dispatch(actions.getPDStores(data) as PDStoresAction)
  })

export { getPDStores }

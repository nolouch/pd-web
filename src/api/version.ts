import { http } from './config'

import * as actions from 'actions/version'

import { PDVersion, PDVersionAction } from 'types/version'

const getPDVersion = (): ThunkResult<void, PDVersionAction> => dispatch =>
  http.get('/version').then(resp => {
    const data: PDVersion = resp.data

    dispatch(actions.getPDVersion(data.version))
  })

export { getPDVersion }

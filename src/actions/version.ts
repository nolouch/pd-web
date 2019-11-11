import { PDVersionAction, PDVersionTypes } from 'types/version'

import { ActionCreator } from 'redux'

const getPDVersion: ActionCreator<PDVersionAction> = (version: string) => ({
  type: PDVersionTypes.GET_PD_VERSION,
  version
})

export { getPDVersion }

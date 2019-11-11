import { PDVersion, PDVersionAction, PDVersionTypes } from 'types/version'

import { Reducer } from 'redux'

export const defaultState = { version: '' }

const version: Reducer<PDVersion, PDVersionAction> = (state = defaultState, action) => {
  switch (action.type) {
    case PDVersionTypes.GET_PD_VERSION:
      return { ...state, version: action.version }
    default:
      return state
  }
}

export default version

import { Setting, SettingAction, SettingTypes } from 'types/setting'

import { Reducer } from 'redux'

export const defaultState = { containerMainLeftWidth: 250 }

const setting: Reducer<Setting, SettingAction> = (state = defaultState, action) => {
  switch (action.type) {
    case SettingTypes.SET_CONTAINER_MAIN_LEFT_WIDTH:
      return { ...state, containerMainLeftWidth: action.containerMainLeftWidth! }
    default:
      return state
  }
}

export default setting

import { SettingAction, SettingTypes } from 'types/setting'

import { ActionCreator } from 'redux'

const setContainerMainLeftWidth: ActionCreator<SettingAction> = (width: number) => ({
  type: SettingTypes.SET_CONTAINER_MAIN_LEFT_WIDTH,
  containerMainLeftWidth: width
})

export { setContainerMainLeftWidth }

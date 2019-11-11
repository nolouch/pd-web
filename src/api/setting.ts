import * as actions from 'actions/setting'

import { SettingAction } from 'types/setting'
import localStorage from 'lib/localStorage'

const getSettings = (): ThunkResult<void, SettingAction> => (dispatch, getState) => {
  let width: number | string | null = localStorage.getItem('PD-ContainerMainLeftWidth')
  width = width ? parseInt(width) : getState().setting.containerMainLeftWidth

  dispatch(actions.setContainerMainLeftWidth(width))
}

const setContainerMainLeftWidth = (width: number) => localStorage.setItem('PD-ContainerMainLeftWidth', width.toString())

export { getSettings, setContainerMainLeftWidth }

import * as actions from 'actions/setting'

import { Dispatch } from 'redux'
import { RootState } from 'reducers'
import { SettingAction } from 'types/setting'
import { ThunkAction } from 'redux-thunk'
import localStorage from 'lib/localStorage'

type ThunkResult<R> = ThunkAction<R, RootState, undefined, SettingAction>

export function getSettings(): ThunkResult<void> {
  return (dispatch: Dispatch, getState) => {
    let width: number | string | null = localStorage.getItem('PD-ContainerMainLeftWidth')
    width = width ? parseInt(width) : getState().setting.containerMainLeftWidth

    dispatch(actions.setContainerMainLeftWidth(width))
  }
}

export function setContainerMainLeftWidth(width: number) {
  localStorage.setItem('PD-ContainerMainLeftWidth', width.toString())
}

import { PDVersion } from 'types/version'
import { Setting } from 'types/setting'
import { combineReducers } from 'redux'
import setting from './setting'
import version from './version'

export interface RootState {
  setting: Setting
  version: PDVersion
}

export default combineReducers({
  setting,
  version
})

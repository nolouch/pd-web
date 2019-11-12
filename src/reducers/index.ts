import { PDStores } from 'types/stores'
import { PDVersion } from 'types/version'
import { Setting } from 'types/setting'
import { combineReducers } from 'redux'
import setting from './setting'
import stores from './stores'
import version from './version'

export interface RootState {
  setting: Setting
  version: PDVersion
  stores: PDStores
}

export default combineReducers({
  setting,
  version,
  stores
})

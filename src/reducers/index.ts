import { PDStores } from 'types/stores'
import { Setting } from 'types/setting'
import { combineReducers } from 'redux'
import setting from './setting'
import stores from './stores'

export interface RootState {
  setting: Setting
  stores: PDStores
}

export default combineReducers({
  setting,
  stores
})

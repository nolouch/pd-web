import { Setting } from 'types/setting'
import { combineReducers } from 'redux'
import setting from './setting'

export interface RootState {
  setting: Setting
}

export default combineReducers({
  setting
})

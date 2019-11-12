import { Action } from 'redux'
import { PDStoresTypes } from 'types/stores'
import { PDVersionTypes } from 'types/version'
import { SettingTypes } from 'types/setting'

type PDActionType = SettingTypes | PDVersionTypes | PDStoresTypes
interface PDAction extends Action<PDActionType> {
  [key: string]: any
}

export default function makeActionCreator(type: PDActionType, ...argNames: string[]) {
  return function(...args: any[]) {
    const action: PDAction = { type }

    argNames.forEach((_, index) => {
      action[argNames[index]] = args[index]
    })
    
    return action
  }
}

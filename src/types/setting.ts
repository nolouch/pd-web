export enum SettingTypes {
  SET_CONTAINER_MAIN_LEFT_WIDTH = 'SET_CONTAINER_MAIN_LEFT_WIDTH'
}

export interface SettingAction {
  type: SettingTypes
  containerMainLeftWidth?: number
}

export interface Setting {
  containerMainLeftWidth: number
}

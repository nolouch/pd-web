export enum PDVersionTypes {
  GET_PD_VERSION = 'GET_PD_VERSION'
}

export interface PDVersionAction {
  type: PDVersionTypes
  version?: string
}

export interface PDVersion {
  version: string
}

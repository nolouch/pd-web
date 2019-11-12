export interface PDStore {
  id: string
  address: string
  version: string
  status_address: string
  git_hash: string
  state_name: string
  status: PDStoreStatus
}

export interface PDStoreStatus {
  capacity: string
  available: string
  used_size: string
  leader_count: number
  leader_weight: number
  leader_score: number
  leader_size: number
  region_count: number
  region_weight: number
  region_score: number
  region_size: number
  start_ts: string
  last_heartbeat_ts: string
  uptime: string
}

export enum PDStoresTypes {
  GET_ALL_STORES = 'GET_ALL_STORES'
}

export interface PDStoresAction {
  type: PDStoresTypes
  stores: PDStore[]
}

export interface PDStores {
  stores: PDStore[]
}

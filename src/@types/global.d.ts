import { RootState } from 'reducers'
import { ThunkAction } from 'redux-thunk'

declare global {
  type ThunkResult<R, A> = ThunkAction<R, RootState, undefined, A>
}

declare module 'd3'
declare module '*.scss' {
  const classes: {
    [key: string]: string
  }
  export default classes
}
declare module '*.jpg'
declare module '*.svg'

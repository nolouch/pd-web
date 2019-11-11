import { RootState } from 'reducers'
import { ThunkAction } from 'redux-thunk'

declare global {
  type ThunkResult<R, A> = ThunkAction<R, RootState, undefined, A>
}

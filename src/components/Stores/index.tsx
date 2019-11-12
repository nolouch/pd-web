import React, { Component } from 'react'

import { PDStoresAction } from 'types/stores'
import { RootState } from 'reducers'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { getPDStores } from 'api/stores'

interface StoresProps {
  handleGetPDStores: () => void
}

class Stores extends Component<StoresProps> {
  componentDidMount() {
    this.props.handleGetPDStores()
  }

  render() {
    return <div className="PD-Stores"></div>
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, PDStoresAction>) => ({
  handleGetPDStores: () => dispatch(getPDStores())
})

export default connect(null, mapDispatchToProps)(Stores)

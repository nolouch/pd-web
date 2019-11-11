import React, { useEffect } from 'react'

import Meta from './Meta'
import Metrics from './Metrics'
import { getPDVersion } from 'api/version'
import { useDispatch } from 'react-redux'

const Cluster = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPDVersion())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="PD-Cluster">
      <Metrics />
      <Meta />
    </div>
  )
}

export default Cluster

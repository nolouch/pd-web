import Meta from './Meta'
import { useDispatch } from 'react-redux'
import { getPDVersion } from 'api/version'
import React, { useEffect } from 'react'

const Cluster = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPDVersion())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="PD-Cluster">
      <Meta />
    </div>
  )
}

export default Cluster

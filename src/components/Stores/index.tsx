import React, { useEffect } from 'react'

import { getPDStores } from 'api/stores'
import { useDispatch } from 'react-redux'

const Stores = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPDStores())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="PD-Stores"></div>
}

export default Stores

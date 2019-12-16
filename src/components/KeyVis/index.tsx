import React, { useState, useEffect } from 'react'
import { Heatmap, HeatmapData } from './heatmap'
import { fetchDummyHeatmap } from 'api/keyvis'

import ToolBar from './ToolBar'

// Todo: define heatmap state, with auto check control, date range select, reset to zoom

export const HeatmapPage: React.FunctionComponent = props => {
  const [heatmapData, setHeatmapData] = useState<HeatmapData>()

  useEffect(() => {
    const load = async () => {
      if (!heatmapData) setHeatmapData(await fetchDummyHeatmap())
    }
    load()
  }, [heatmapData])

  return heatmapData ? <Heatmap data={heatmapData} onBrush={range => console.log(range)} /> : <></>
}

const KeyVis = () => (
  <div className="PD-KeyVis"  style={{width: '100%', height: 'calc(100vh - 240px)'}}>
    <ToolBar />
    <HeatmapPage />
  </div>
)

export default KeyVis

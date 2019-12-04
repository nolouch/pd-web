import React, { useState, useEffect } from 'react'
import { Heatmap, HeatmapData } from './components/heatmap'
import { fetchHeatmap, fetchDummyHeatmap } from 'api/keyvis'

export const HeatmapPage: React.FunctionComponent = props => {
  const [heatmapData, setHeatmapData] = useState<HeatmapData>()

  useEffect(() => {
    const load = async () => {
      if (!heatmapData) setHeatmapData(await fetchDummyHeatmap())
    }
    load()
  })

  return <>{heatmapData && <Heatmap data={heatmapData} onBrush={range => console.log(range)} />}</>
}

const KeyVis = () => (
  <div className="PD-KeyVis">
    <HeatmapPage />
  </div>
)

export default KeyVis

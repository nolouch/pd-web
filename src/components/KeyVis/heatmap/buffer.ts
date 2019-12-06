// @ts-nocheck
import * as d3 from 'd3'

// const colorTheme = d3.interpolateRgbBasis(
//   ['#f5e070', '#ee9e1b', '#dc516c', '#f67bb1', '#522172', '#3687c5', '#38a2a7'].reverse()
// )
// const colorTheme = d3.interpolateRgbBasis(
//   ['#fed98f','#ff8c30','#f11502','#c2116a','#8703ac']
// )
// const colorTheme = d3.interpolateRgbBasis(['#e7e9ec', '#253966'])
const colorTheme = d3.interpolateRgbBasis([
  '#000000',
  '#080808',
  '#090909',
  '#101010',
  '#111111',
  '#121212',
  '#131313',
  '#141414',
  '#151515',
  '#202020',
  '#410c74',
  '#72067b',
  '#b00f53',
  '#fcc734',
  '#fbfc43',
  '#ffffb0'
])
// const colorTheme = d3.interpolateRgbBasis(
//   ["#202020","#410c74","#72067b","#b00f53","#fcc734","#fbfc43","#ffffb0"]
// )
// const colorTheme = d3.interpolateRgbBasis(
//   ['white','#F9F9D4', '#f79a6e', '#e75f6a', '#b13579', '#532874', '#4e2872',  '#060608'].reverse()
// )

export function createBuffer(values: number[][], brightness: number) {
  const maxValue = d3.max(values.map(array => d3.max(array))) / brightness
  // const logScale = calcLogScale(3, maxValue)
  const logScale = d3.scaleSymlog().domain([0, maxValue])
  const colorMap = d => colorTheme(logScale(d))

  const valueWidth = values.length
  const valueHeight = (values[0] || []).length
  const canvas = d3
    .create('canvas')
    .attr('width', valueWidth)
    .attr('height', valueHeight)
    .node() as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const sourceImageData = ctx.createImageData(valueWidth, valueHeight)
  const imageData = sourceImageData.data

  for (var i = 0; i < imageData.length; i += 4) {
    const pixel = i / 4
    const x = pixel % valueWidth
    const y = Math.floor(pixel / valueWidth)
    const color = d3.color(colorMap(values[x][y]))

    imageData[i] = color.r
    imageData[i + 1] = color.g
    imageData[i + 2] = color.b
    imageData[i + 3] = 255 // Alpha
  }

  ctx.putImageData(sourceImageData, 0, 0)

  return canvas
}

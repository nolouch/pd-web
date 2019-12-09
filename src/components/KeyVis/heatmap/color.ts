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

export type Color = {
  r: number
  g: number
  b: number
}

export type ColorScale = (n: number) => Color
export type ColorTheme = { backgroud: ColorScale; label: ColorScale }

export function getColorTheme(maxValue: number, brightness: number): ColorTheme {
  const logScale = d3.scaleSymlog().domain([0, maxValue / brightness])
  const backgroudColorScale = (d: number) => d3.color(colorTheme(logScale(d)))
  const labelColorScale = (d: number) =>
    d3.hsl(backgroudColorScale(d)).l > 0.5 ? d3.color('black') : d3.color('white')

  return {
    backgroud: backgroudColorScale,
    label: labelColorScale
  }
}

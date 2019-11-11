import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getSettings, setContainerMainLeftWidth } from 'api/setting'

import Nav from 'components/Nav'
import { RootState } from 'reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import SideRoutes from './SideRoutes'
import Sidebar from 'components/Sidebar'
import Tabs from './Tabs'

interface ContainerStateProps {
  containerMainLeftWidth: number
}

const Container: React.FC<ContainerStateProps> = props => {
  const [leftWidth, setLeftWidth] = useState(0)
  const [resizing, setResizing] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSettings())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLeftWidth(props.containerMainLeftWidth)
  }, [props.containerMainLeftWidth])

  const onMouseDown = () => setResizing(true)
  const onMouseMove = (position: 'left' | 'right') => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!resizing) {
      return
    }

    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const pageX = e.pageX
    let offset = 0
    switch (position) {
      case 'left':
        offset = pageX - rect.width
        break
      case 'right':
        offset = pageX - rect.left
        break
      default:
        break
    }

    setLeftWidth(leftWidth + offset)
  }
  const onMouseUp = () => {
    setResizing(false)
    setContainerMainLeftWidth(leftWidth)
  }

  return (
    <Router>
      <div className="PD-Container">
        <Nav />
        <article className="main">
          <div style={{ width: leftWidth }} className="main-left" onMouseMove={onMouseMove('left')}>
            <Sidebar title="Browse">
              <SideRoutes />
            </Sidebar>
          </div>
          <div className="change-left-width" onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
          <div className="main-right" onMouseMove={onMouseMove('right')} onMouseUp={onMouseUp}>
            <Tabs />
            <div className="right-main">
              <Routes />
            </div>
          </div>
        </article>
      </div>
    </Router>
  )
}

const mapStateToProps = (state: RootState) => ({
  containerMainLeftWidth: state.setting.containerMainLeftWidth
})

export default connect(mapStateToProps)(Container)

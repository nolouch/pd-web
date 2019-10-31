import React from 'react'
import Container from 'components/Container'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

const App: React.FC = () => (
  <Provider store={store}>
    <div className="PD-App">
      <Container />
    </div>
  </Provider>
)

export default App

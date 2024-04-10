import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import MainConatiner from './components/MainConatiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={appStore}>
     <Header/>
      <Body/>
      <MainConatiner/>
    </Provider>
     
  )
}

export default App
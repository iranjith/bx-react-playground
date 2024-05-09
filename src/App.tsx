import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiTabs from './components/Tabs'
import CustomizedTabs from './components/Tabs'
import UnstyledTabsIntroduction from './components/UnstyleTabs'

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' }
  ]

  return (
    <>
      <CustomizedTabs />
      {/* <UnstyledTabsIntroduction /> */}
    </>
  )
}

export default App

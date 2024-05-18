import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiTabs from './components/Tabs'
import CustomizedTabs from './components/Tabs'
import UnstyledTabsIntroduction from './components/UnstyleTabs'
import DynamicForm from './components/FormBuilder'
import DynamicAutoComplete from './components/DynamicSelect'
import FormBuilder from './components/FormBuilder'

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' }
  ]

  return (
    <>
    <FormBuilder />
      {/* <DynamicForm/> */}
      {/* <DynamicAutoComplete/> */}
      {/* <UnstyledTabsIntroduction /> */}
    </>
  )
}

export default App

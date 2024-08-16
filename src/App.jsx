import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LoginPage from './page/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
     <LoginPage/>
    </div>
  )
}

export default App

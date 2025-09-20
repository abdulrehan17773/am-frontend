import { useState } from 'react'
import {Button} from './components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-3 bg-red-500 m-2'></div>
    <Button>
      Hello World
    </Button>
      </>
  )
}

export default App

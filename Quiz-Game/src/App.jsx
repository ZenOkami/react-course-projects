import { useState } from 'react'
import Header from './components/Header'
import Quiz from './components/Quiz'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Quiz />
      </div>
    </>
  )
}

export default App

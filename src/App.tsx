import { useState } from 'react'
import './App.css'
import CourseGoal from './components/CourseGoal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <CourseGoal 
        title="Learn React + TS" 
        >
          <p>Learn it from the ground up</p>
        </CourseGoal>
    </main>
  )
}

export default App

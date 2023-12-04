import { useState } from 'react';
import goalsImg from './assets/react.svg';

import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header image={{src:goalsImg,alt:'A List of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal 
        title="Learn React + TS" 
        >
          <p>Learn it from the ground up</p>
        </CourseGoal>
    </main>
  )
}

export default App

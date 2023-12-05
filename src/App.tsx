import { useState } from 'react';
import goalsImg from './assets/react.svg';

import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header';
type CourseGoal = {
  title: string;
  description: string;
  id: number;
}
function App() {
  // const [goals,setGoals] = useState<Array<CourseGoal>>([]);
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    /// ...
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        description: "hello",
        title: "aso"
      }
      return [...prevGoals, newGoal]
    });
  }


  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {
          goals.map((item) => (
            <li key={item.id}>
              <CourseGoal
                title={item.title}
              >
                <p>{item.description}</p>
              </CourseGoal>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default App

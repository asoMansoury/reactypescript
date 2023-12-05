import { useState } from 'react';
import goalsImg from './assets/react.svg';

import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};
function App() {
  // const [goals,setGoals] = useState<Array<CourseGoal>>([]);
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal() {
    /// ...
    setGoals(prevGoals => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        description: "hello",
        title: Math.random().toString()
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    // alert(id);
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteFunc={handleDeleteGoal}></CourseGoalList>
    </main>
  )
}

export default App

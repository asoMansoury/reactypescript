import { useState } from 'react';
import goalsImg from './assets/react.svg';

import './App.css'
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';
import Container from './components/BasicComponent/Container';
import Button from './components/BasicComponent/Button';
import TimersContextProvider from './store/time-context';


export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};
function App() {

  // const [goals,setGoals] = useState<Array<CourseGoal>>([]);
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    /// ...
    setGoals(prevGoals => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        description: goal,
        title: summary
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    // alert(id);
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id));
  }

  return (
    <TimersContextProvider>
      <main>
        <Container as={Button}>hello</Container>


        <Header image={{ src: goalsImg, alt: 'A List of goals' }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal onAddGoal={handleAddGoal}></NewGoal>
        <CourseGoalList goals={goals} onDeleteFunc={handleDeleteGoal}></CourseGoalList>
      </main>
    </TimersContextProvider>
  )
}

export default App

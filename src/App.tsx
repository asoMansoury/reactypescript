import { useEffect, useState } from 'react';
import goalsImg from './assets/react.svg';

import './App.css'
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';
import Container from './components/BasicComponent/Container';
import Button from './components/BasicComponent/Button';
import TimersContextProvider from './store/time-context';
import { get } from './util/http';

type RawDataBlogPost = {
  id:number;
  userId:number;
  title:string;
  body:string;
}

export type BlogPost = {
  id:number;
  title:string;
  text:string;
}

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [fetchedPosts,setFetchedPosts] =  useState<unknown>();

  useEffect(()=>{
    async function  fetchPosts(){
      var data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[];
      const blogPosts:BlogPost[] = data.map((rawPost)=>{
        return {
          id:rawPost.id,
          title: rawPost.title,
          text:rawPost.body
        }
      });
      setFetchedPosts(blogPosts);
    }

  },[])

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

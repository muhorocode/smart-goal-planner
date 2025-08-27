import {useEffect, useState} from 'react'
import AddGoalForm from './components/AddGoalForm'
import GoalList from './components/GoalList'

function App(){
  const [goals, setGoals]= useState([])

  //fetch goals upon loading
  useEffect(()=>{
    fetch('http://localhost:3001/goals')
    .then((res)=>res.json())
    .then((data)=>setGoals(data))
    .catch((error)=>console.error(error))
},[])

//add a new goal

const addGoal=(goal)=>{
  fetch('http://localhost:3001/goals',
    {
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(goal)
  })
   .then((res)=>res.json())
   .then((data)=>setGoals((prev)=>[...prev,data]))
   .catch((error)=>console.error('There was an error creating the Goal:',error))
}

  return(
   <div style={{padding:"20px"}}>
   <h1>Smart Goal Planner</h1>
   <GoalList goals={goals}/>
   <AddGoalForm onAddGoal={addGoal}/>
   </div>
  )
}

export default App
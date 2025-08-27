import {useEffect, useState} from 'react'
import axios from 'axios'

function App(){
  const [goals, setGoals]= useState([])

  // used to fetch goals when component mounts

  useEffect(()=>{
    axios
    .get('http://localhost:3001/goals')
    .then((res)=>setGoals(res.data))
    .then(((err)=>console.error("Error fetching goals:",err)))
  },[])
  return(
    <div style={{padding:"20px"}}>
     <h1>Smart Goal Planner`</h1>
     <ul>
      {goals.map((goal)=>(
        <li key={goal.id}>{goal.name}- Saved: ${goal.savedAmount}/${goal.targetAmount}</li>
      ))}
     </ul>
    </div>
  )
}

export default App
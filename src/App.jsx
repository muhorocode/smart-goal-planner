import {useEffect, useState} from 'react'

function App(){
  const [goals, setGoals]= useState([])

  // used to fetch goals when component mounts

  useEffect(()=>{
    fetch('http://localhost:3001/goals')
    .then((res)=>res.json())
    .then((data)=>setGoals(data))
    .catch((error)=>console.error('There was an error fetching the Goal:',error))
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
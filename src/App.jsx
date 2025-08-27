import {useEffect, useState} from 'react'

function App(){
  const [goals, setGoals]= useState([])
  const [newGoal, setNewGoal] = useState({name:"", targetAmount:"", savedAmount:0})
  // used to fetch goals when component mounts

  useEffect(()=>{
    fetch('http://localhost:3001/goals')
    .then((res)=>res.json())
    .then((data)=>setGoals(data))
    .catch((error)=>console.error(error))
},[])

//handling the form input changes

const handleChange=(e)=>{
  const{name,value}=e.target
  setNewGoal((prev)=>({...prev,[name]:value}))
}

//to handle form submission

const handleSubmit=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3001/goals',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newGoal)
  })
   .then((res)=>res.json())
   .then((data)=>setGoals((prev)=>[...prev,data]))
   .catch((error)=>console.error('There was an error creating the Goal:',error))

   //reset the form

   setNewGoal({name:'', targetAmount:'', savedAmount:0})
}
  return(
    <div style={{padding:"20px"}}>
     <h1>Smart Goal Planner`</h1>
     <ul>
      {goals.map((goal)=>(
        <li key={goal.id}>{goal.name}- Saved: ${goal.savedAmount}/${goal.targetAmount}</li>
      ))}
     </ul>

     <h2>Add New Goal</h2>
     <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='Goal Name' value={newGoal.name} onChange={handleChange} required/>
      <input type="number" name='targetAmount' placeholder='Target Amount' value={newGoal.targetAmount} onChange={handleChange}required />
      <button type="submit">Add Goal</button>
     </form>
    </div>
  )
}

export default App
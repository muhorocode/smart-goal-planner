import {useEffect, useState} from 'react'
import AddGoalForm from './components/AddGoalForm'
import GoalList from './components/GoalList'
import DepositForm from './components/DepositForm'
import Overview from './components/overview'  

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

const addDeposit = (goalId, amount) => {
  //finds the current goal to access its saved amount

  const goal=goals.find(goals=>goals.id===goalId)
  if(!goal)return
  const newSavedAmount=Number(goal.savedAmount)+Number(amount)

  fetch(`http://localhost:3001/goals/${goalId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ savedAmount:newSavedAmount})
  })
    .then(res => res.json())
    .then(updatedGoal => {
      setGoals(goals =>
        goals.map(goal =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        )
      );
    })
    .catch(error => console.error('Error adding deposit:', error));
};

 const deleteGoal=(goalId)=>{
  fetch(`http://localhost:3001/goals/${goalId}`,{
    method:'DELETE'
  })
  .then(()=>{
    setGoals((prev)=>prev.filter((goal)=>goal.id !== goalId))
  })
  .catch((error)=>console.error('There was an error deleting the goal:',error))
 }

  return(
   <div style={{padding:"20px"}}>
   <h1>Smart Goal Planner</h1>
   <Overview goals={goals}/>
   <GoalList goals={goals} onDelete={deleteGoal}/>
   <AddGoalForm onAddGoal={addGoal}/>
   <DepositForm goals={goals} onDeposit={addDeposit}/>
   </div>
  )
}

export default App
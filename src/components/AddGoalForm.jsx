import {useState} from 'react'

function AddGoalForm({onAddGoal}){
    const [newGoal, setNewGoal]= useState({name:'', targetAmount:'',savedAmount:0,})

    const handleChange=(e)=>{
        const {name, value}= e.target
        setNewGoal((prev)=>({...prev,[name]:value}))    
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!newGoal.name || !newGoal.targetAmount) return
        onAddGoal(newGoal)
        setNewGoal({name:'', targetAmount:'', savedAmount:0})
    }

    return(
        <form onSubmit={handleSubmit} style={{marginTop:'20px'}}>
            <input type="text" name="name" placeholder="Goal Name" value={newGoal.name} onChange={handleChange}required />
            <input type="number" name="targetAmount" placeholder="Target Amount" value={newGoal.targetAmount} onChange={handleChange} required/>
            <button type="submit">Add Goal</button>
        </form>
    )
    }

    export default AddGoalForm
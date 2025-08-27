
//displays a single goal with progress information
function GoalItem({goal, onDelete}){
    //calculate the progress as a percentage
    const progress=(goal.savedAmount/goal.targetAmount)*100
    // how much money is remaining
    const remaining=goal.targetAmount-goal.savedAmount

    return(
        <li style={{marginBottom:"20px"}}>
          <strong>{goal.name}</strong>
          <p>
            Saved:${goal.savedAmount} / ${goal.targetAmount} | Remaining: ${remaining}
          </p>
          <div style={{background:"grey", height:"10px", width:`${progress}`, borderRadius:"5px"}}>
          <div style={{background:"green", height:"10px", width:`${progress}`, borderRadius:"5px"}}>
          </div>  
          </div>

          <button onClick={()=>onDelete(goal.id)} style={{marginTop:"10px", background:"red", color:"white", border:"none", padding:"5px 10px", borderRadius:"5px", cursor:"pointer"}}>
          Delete
          </button>
        </li>
    )
}

export default GoalItem
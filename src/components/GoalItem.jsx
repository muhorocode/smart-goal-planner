
//displays a single goal with progress information
function GoalItem({goal}){
    //calculate the progress as a percentage
    const progress=(GoalItem.savedAmount/GoalItem.targetAmount)*100
    // how much money is remaining
    const remaining=goal.targetAmount-goal.savedAmount

    return(
        <li style={{marginBottom:"20px"}}>
          <strong>{goal.name}</strong>
          <p>
            Saved:${goal.savedAmount} / ${goal.targetAmount} | Remaining: ${remaining}
          </p>
          <div style={{background:"grey", height:"10px", width:"100%", borderRadius:"5px"}}>
          <div style={{background:"green", height:"10px", width:"100%", borderRadius:"5px"}}>
          </div>  
          </div>
        </li>
    )
}

export default GoalItem
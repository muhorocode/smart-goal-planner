
function Overview({goals}){
    //number of goals
 const totalGoals=goals.length

 // money saved across all goals

 const totalSaved=goals.reduce((sum,goal)=>sum+goal.saved,0)    

 //goals completed

const completeGoals=goals.filter((goal)=>goal.savedAmount>=goal.targetAmount).length

// date to calculate deadlines

const today=new Date()


return(
    <div style={{marginBottom:"30px", padding:"10px", border:"1px solid grey"}}>
        <h2>Overview</h2>
        <p>Total Goals: {totalGoals}</p>
        <p>Total Money Saved: ${totalSaved}</p>
        <p>Completed Goals: {completedGoals}</p>

        <ul>
            {goals.map((goal)=>{
                const deadline=new Date(goal.deadline)
                let status=""
             //determine the status

             if(goal.savedAmount>=goal.targetAmount){
                status="completed"
             }else if(deadline<today){
                    status="overdue"
                }
                return(
                    <li key={goal.id}>
                     {goal.name}-{status}
                    </li>
                )
            })}
        </ul>
    </div>
)
}
export default Overview
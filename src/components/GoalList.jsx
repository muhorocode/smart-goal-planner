import GoalItem from "./GoalItem";

function GoalList({goals, onDelete}){
    return(
        <ul>
        {goals.map((goal)=>(
           <GoalItem key={goal.id} goal={goal} onDelete={onDelete}/> 
        ))}
        </ul>
    )
}

export default GoalList
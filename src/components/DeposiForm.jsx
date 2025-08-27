import {useState} from 'react'
//allow users to add deposits/money to a selected goal
function DepositForm({goals, onDeposit}){

    //state to keep track of the selected goal id
    const [selectedGoalId, setSelectedGoalId] = useState(goals[0]?.id || "")
    
    // state to keep track of deposits
     const [amount, setAmount]=useState("")

     const handleSubmit=(e)=>{
         e.preventDefault()

         // makes sure goal and amount are selected
            if(!selectedGoalId || !amount) return
         
         onDeposit(selectedGoalId, Number(amount))

         // reset form
         setAmount("")
     }
    return(
     <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>
        <select value={selectedGoalId} onChange={(e)=>setSelectedGoalId(e.target.value)}>
            {goals.map((goal) => (
                <option key={goal.id} value={goal.id}>
                    {goal.name}
                </option>
            ))}
        </select>
        <input type="number" placeholder="Deposit Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
        <button type="submit">Add Deposit</button>
     </form>
    )
}

export default DepositForm
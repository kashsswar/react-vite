/* eslint-disable no-unused-vars */
import React, {useState} from "react"

function Chai()
{
    let [counter, setCounter] = useState(15)
    const addValue=()=>{
       if(counter >= 20){
        alert("You have reached the maximum limit")
        return
       }
       setCounter(counter + 1)
    }
    const removeValue =()=>{
        if(counter<=0){
            alert("You have reached the minimum limit")
            return
        }
        setCounter(counter - 1)
    }

    const username = 'Karishma Sinsinwar'
    return(
        <>
        <h1>Chai in react</h1>
        <h2>Number of chais i drank : {counter}</h2>
        <button onClick={(addValue)}>Add value</button>
        <button onClick={(removeValue)}>Remove value {username}</button>  {/*evaluated expression*/ }
        </>
    )
}
export default Chai
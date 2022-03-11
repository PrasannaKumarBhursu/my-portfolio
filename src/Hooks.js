import { Button } from '@material-ui/core';
import  { useState,useEffect } from 'react'

function Hooks() {
    const [count,setCount]=useState({num:1,id:"prasanna"});

    const[windowWidth,setwindowWidth]=useState(window.innerWidth)

    const handleAdd=()=>{
        setCount(prev=>{
            return {
                ...prev,num:prev.num+1
            }
        })
        
    }

    const handleSubtract=()=>{
        setCount(prev=>{
            return {
                ...prev,num:prev.num-1
            }
        })
    }

    useEffect(
        ()=>{
            window.addEventListener("resize",()=>{
                setwindowWidth(window.innerWidth)
            })
        },[]
    )

    return (
        <div>
            <Button onClick={handleSubtract}>
                -
            </Button>
            <span>{count.num}</span>
            
            <Button onClick={handleAdd}>+</Button>
            <h1>{windowWidth}</h1>
        </div>
    )
}

export default Hooks

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyMilk } from '../../redux/milk/milkActions'

function MilkContainer() { 
       const state = useSelector((state)=>state.milk)
       console.log(state)
       const dispatch = useDispatch()
  return (
    <div>
        <h1>Milks : {state.numOfMilks}</h1>
        <button onClick={()=>dispatch(buyMilk())}>Buy milk</button>
    </div>
  )
}

export default MilkContainer
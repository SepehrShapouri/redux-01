import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../../redux/cake/cakeActions'

function cakeContainer() {
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    const [value,setValue] = useState(1)
  return (
    <div>
        <h1>Cakes : {state.numOfCakes}</h1>
        <label htmlFor="value">amount you want to buy</label>
<input type="number"  id='value' value={value} onChange={(e)=>setValue(e.target.value)} style={{width:"30px",height:"30px",display:"block"}}/>
<button onClick={()=> dispatch(buyCake(value))}>Buy</button>
    </div>
  )
}

export default cakeContainer
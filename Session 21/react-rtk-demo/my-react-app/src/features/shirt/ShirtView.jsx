import React, { useState } from 'react'
import { ordered, restocked } from '../shirt/shirtSlice';
import { useSelector, useDispatch } from 'react-redux';

const shirtView = () => {
    const [value, setValue] = useState(1);
    const numOfShirts = useSelector(state => state.shirt.numOfShirts)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of shirts: {numOfShirts} </h2>
        <button onClick={() => dispatch(ordered())}>Order Shirt!</button>
        <input type="number" onChange={e => setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked())}>Restock Shirt!</button>
    </div>
  )
}

export default shirtView
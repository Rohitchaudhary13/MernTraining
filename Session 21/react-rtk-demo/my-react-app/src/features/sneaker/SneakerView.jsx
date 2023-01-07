import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from '../sneaker/sneakerSlice';

export const SneakerView = () => {
    const numOfSneakers = useSelector(
        state => state.sneaker.numOfSneakers
    )
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of Sneakers : {numOfSneakers}</h2>
        <button onClick={() => dispatch(ordered())}>Order Now!</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Sneakers!</button>
    </div>
  )
}

export default SneakerView
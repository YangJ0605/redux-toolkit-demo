import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/use-app-dispatch-selector'


import { increment,  decrement, asyncInCrement} from './store/features/counterSlice'


function App() {
  const {count, title} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h4>{title}</h4>
      <button onClick={() => {
        dispatch(increment({step: 4}))
      }}>{count}</button>
      <hr />
      <button onClick={() => {
        dispatch(asyncInCrement({step: 3}))
      }}>{count}</button>
    </div>
  )
}

export default App

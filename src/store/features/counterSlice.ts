import {createSlice} from '@reduxjs/toolkit'
import { AppDispatch } from '..'

const initialState = {
  count: 1,
  title: 'redux toolkit pre'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, {payload}:{payload: {step: number}}) {
      state.count += payload.step
    },
    decrement(state) {
      state.count -=1
    }
  }
})

export const {increment, decrement} = counterSlice.actions

export const asyncInCrement = (payload:{step: number}) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 1500)
}

export type CounterState = typeof initialState


export default counterSlice.reducer
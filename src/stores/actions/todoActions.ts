import { addItem, removeItem, toggleCheck } from "../reducers/todoReducer"
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import {store} from '../reducers'

export const createTodo = (value: string): ThunkAction<Promise<void>, typeof store, null, AnyAction> => async (dispatch: ThunkDispatch<typeof store, null, AnyAction>): Promise<void> => {
    dispatch(addItem(value))
}

export const deleteTodo = (index: number): ThunkAction<Promise<void>, typeof store, null, AnyAction> => async (dispatch: ThunkDispatch<typeof store, null, AnyAction>): Promise<void> => {
    dispatch(removeItem(index))
}

export const toggleTodo = (index: number): ThunkAction<Promise<void>, typeof store, null, AnyAction> => async (dispatch: ThunkDispatch<typeof store, null, AnyAction>): Promise<void> => {
    dispatch(toggleCheck(index))
}
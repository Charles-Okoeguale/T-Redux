import { ActionTypes } from "../action-types"
import { Dispatch } from "redux" // this is the dispatch type from redux that takes care of type errors in typescript.
import { Action } from "../actions/index"


export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DEPOSIT,
            payload: amount
        })
      
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.WITHDRAWAL,
            payload: amount
        })
      
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.BANKRUPT,
        })
      
    }
}
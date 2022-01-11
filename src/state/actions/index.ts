import { ActionTypes } from "../action-types/index"


interface DepositAction {
    type: ActionTypes.DEPOSIT
    payload: number
}

interface WithdrawalAction {
    type: ActionTypes.WITHDRAWAL
    payload: number
}

interface BankruptAction {
    type: ActionTypes.BANKRUPT
}

 export type Action = DepositAction | WithdrawalAction | BankruptAction

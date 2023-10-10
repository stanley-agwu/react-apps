import { ActionType } from "../actions-types";

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}
interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}
interface CloseAction {
    type: ActionType.CLOSE_ACCOUNT
}

export type Action = DepositAction | WithdrawAction | CloseAction
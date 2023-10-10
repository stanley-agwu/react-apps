import { ActionType } from "../actions-types";
import { Dispatch } from "redux";
import { Action } from "../actions";


export const deposit = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdraw = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const closeAccount = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CLOSE_ACCOUNT
        })
    }
}
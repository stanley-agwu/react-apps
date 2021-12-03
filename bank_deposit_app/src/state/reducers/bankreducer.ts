const initialState = 0;

interface DepositAction {
    type: 'deposit',
    payload: number
}
interface WithdrawAction {
    type: 'withdraw',
    payload: number
}
interface CloseAction {
    type: 'closeAccount'
}

type ActionType = DepositAction | WithdrawAction | CloseAction

const reducer = (state: number = initialState, action: ActionType) => {
    switch(action.type) {
        case 'deposit':
            return state + action.payload
        case 'withdraw':
            return state - action.payload
        case 'closeAccount':
            return 0
        default:
            return state
    }
}

export default reducer;
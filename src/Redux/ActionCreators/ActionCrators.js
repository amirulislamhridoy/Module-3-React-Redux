import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actionTypes/Action.Types"

export const add_to_card = (user) => {
    return {
        type: ADD_TO_CARD,
        payload: user
    }
}
export const remove_from_card = (user) => {
    return {
        type: REMOVE_FROM_CARD,
        payload: user
    }
}
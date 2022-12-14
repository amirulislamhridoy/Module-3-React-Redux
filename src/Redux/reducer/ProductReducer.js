import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actionTypes/Action.Types"

const initialState = {
    card: []
}

const productReducer = (state = initialState, action) => {
    const selectedUser = state.card.find(u => u.id === action.payload.id)
    switch(action.type){
        case ADD_TO_CARD:
            if (selectedUser){
                const newCard = state.card.filter(user => user.id !== action.payload.id)
                return {
                    card: [...newCard, {...selectedUser, quantity: selectedUser.quantity + 1}]
                }
            }
            return{
                // card: [...state.card, action.payload]
                card: [...state.card, {...action.payload, quantity: 1}]
            }
        case REMOVE_FROM_CARD:
            return{
                // card: [...state.card, action.payload]
                card: [...state.card.filter(u => u.id !== action.payload.id)]
            }
        default:
            return state
    }
}

export default productReducer
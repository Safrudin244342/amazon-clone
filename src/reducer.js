export const initialState = {
  cart: [],
  user: null
}

function reducer(state, action) {
  switch(action.type){
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case 'REMOVE_FROM_CART':
      return { state }
    default:
      return state
  }
}

export default reducer
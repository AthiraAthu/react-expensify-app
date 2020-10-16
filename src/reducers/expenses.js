const expenseReducerDefaultState = []

//expense reducer

export default (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            // return state.concat(action.expense) //we dont want to change the original state.instead we can return a new array using concat
            return [
                ...state,
                action.expense
            ]
            // ... is a spread operator which we can use to create new array or something with existing ones and spread out
            //eg : [...state,'hi']==>creates new array which contains all the items in the state and hi
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id)    
            
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...state,
                        ...action.updates
                    }
                }
                else{
                   return expense 
                }
            })
        default:
            return state
    }
}

const userReducer = (state={},action)=>{
    switch(action.type){
        case 'ADD_USER':
            return {userName: action.userName }
        default:
            return state

    }
}
export default userReducer
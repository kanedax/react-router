
export const init = {
    postData : {
        userId : "",
        id : "",
        title : "",
        body : "",
    }
}

export const reducer = (state , action)=>{
    switch (action.type) {
        case 'isUpdate':
            return{...state , postData : action.payload}
        case 'setInputValue':
            return{...state , postData : {
                ...state.postData , 
                [action.propName] : action.propValue
            }}
        default:
            return state;
    }
}
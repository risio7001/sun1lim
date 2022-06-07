const initialState = {
    "id":"abc",
    "header":true,
    "isMobile": window.innerWidth < 1440 ?( window.innerWidth < 715 ? 2 : 1 ): 0,
    "cate":'All',
    "login":false
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ID":
            return state = {
                ...state,
                id:action.id
            }
        case "SET_HEADER":
            return state = {
                ...state,
                header:action.header
            }
        case "SET_DISPLAY":
            // console.log(action.isMobile);
            return state = {
                ...state,
                isMobile:action.isMobile
            }
        case "SET_CATE":
            return state = {
                ...state,
                cate:action.cate
            }
        case "SET_LOGIN":
            return state = {
                ...state,
                login:action.login
            }
            
        default:
            return state;
    }
}
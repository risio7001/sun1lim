const initialState = {
    "id":"abc",
    "header":true,
    "isMobile": window.innerWidth < 1024
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ID":
            state.id = action.id;
            return;
        case "SET_HEADER":
            state.header = action.header;
            return;
        case "SET_DISPLAY":
            state.isMobile = action.isMobile;
            return;
        default:
            return state;
    }
}
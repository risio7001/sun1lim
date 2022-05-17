const initialState = {
    "id":"abc",
    "header":true
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ID":
            state.id = action.id;
            return;
        case "SET_HEADER":
            state.header = action.header;
            // console.log(state);
            return;
        default:
            return state;
    }
}
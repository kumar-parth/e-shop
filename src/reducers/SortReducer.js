const INITIAL_STATE = "l_to_h";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return action.payload;
        default:
            return state;
    }
};

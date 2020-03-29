const INITIAL_STATE = {
    headerMenu: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DRAWER_PANEL':
            return {
                ...state,
                [action.payload.name]: action.payload.status
            };
        case 'CLOSE_DRAWER_PANEL':
            return {
                ...state,
                [action.payload.name]: ''
            };
        case 'RESET_DRAWER_PANEL':
            return {
                state
            };
        default:
            return state;
    }
};

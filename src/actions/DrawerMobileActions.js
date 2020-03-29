export const setDrawerPanel = (name, status) => {
    return {
        type: 'SET_DRAWER_PANEL',
        payload: { name, status }
    };
};
export const closeDrawerPanel = name => {
    return {
        type: 'CLOSE_DRAWER_PANEL',
        payload: { name }
    };
};
export const resetDrawerPanel = () => {
    return {
        type: 'RESET_DRAWER_PANEL'
    };
};

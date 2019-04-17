const initalTestState = {

};


export const testReducer = (state=initalTestState, action) => {
    console.log('reducer is ready');
    return {
        'TEST.testReducer': {
            ...state,
            result: action.payload
        }
    }[action.type] || {...state}
}
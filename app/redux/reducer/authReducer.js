/**
 * Created by liliang on 2018/11/4
 */


const initialAuthState = { isLoggedIn: false ,count: 0};

export default function auth(state = initialAuthState, action) {
    console.log(action);
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        case 'increase':
            let count = state.count;
            return {count: count + 1};
        default:
            return state;
    }
}
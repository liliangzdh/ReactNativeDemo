/**
 * Created by liliang on 2018/11/4
 */


const initialAuthState = { isLoggedIn: false };

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case 'Login':
            return { ...state, isLoggedIn: true };
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}
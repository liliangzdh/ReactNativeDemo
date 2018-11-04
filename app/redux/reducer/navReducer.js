/**
 * Created by liliang on 2018/11/4
 */


import {RootNavigator} from '../../navigation';


// const firstAction = RootNavigator.router.getActionForPathAndParams('User');
// const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const initialNavState = RootNavigator.router.getStateForAction(
//     tempNavState
// );

const navReducer = (state, action) => {
    let nextState;
    switch (action.type) {
        // case 'Login':
        //     //如果登录了。。
        //     nextState = RootNavigator.router.getStateForAction(
        //         NavigationActions.back(),
        //         state
        //     );
        //     break;
        // case 'Logout':
        //     nextState = RootNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Login' }),
        //         state
        //     );
        //     break;
        // case 'User':
        //     nextState = RootNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'User' }),
        //         state
        //     )
        //     break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            console.log(action.key);
            break;
    }
    return nextState || state;
}



export default navReducer;
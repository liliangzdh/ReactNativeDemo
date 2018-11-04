/**
 * Created by liliang on 2018/11/4
 */


import { RootNavigator } from '../../navigation';
import { NavigationActions } from 'react-navigation';

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
            console.log('这个是啥',nextState);
            break;
    }

    return nextState || state;
}

export default navReducer;
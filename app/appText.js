import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {View, Text, Button} from 'react-native';

// React component
class Counter extends Component {

    // static propTypes = {
    //     value: PropTypes.number.isRequired,
    //     onIncreaseClick: PropTypes.func.isRequired
    // }

    render() {
        const {value, onIncreaseClick} = this.props;
        console.log(this.props);
        return (
            <View style={{paddingTop: 200,justifyContent: 'center',alignItems: 'center'}}>
                <Text>{value}</Text>
                <Button onPress={onIncreaseClick} title='Increase'/>
            </View>
        )
    }
}


// Action
const increaseAction = {type: 'increase'};

// Reducer
function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return {count: count + 1};
        default:
            return state
    }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);





const RootApp = () => {
    return (
        <View style={{flex: 1}}>
            <Provider store={store}>
                <App/>
            </Provider>
        </View>
    )
}
export default  RootApp;
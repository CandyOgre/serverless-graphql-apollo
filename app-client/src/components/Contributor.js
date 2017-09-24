import React from 'react';
import { View, Text } from 'react-native';

class Contributor extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.user.name}</Text>
            </View>
        );
    }
}

export default Contributor;

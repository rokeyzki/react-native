import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Other')}
          title="Other Button"
        />
        <Button
          onPress={() => navigate('Param', { user: 'Jack' })}
          title="Param Button"
        />
      </View>
    );
  }
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };

  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

class ParamScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Other: { screen: OtherScreen },
  Param: { screen: ParamScreen },
});

export default SimpleApp;
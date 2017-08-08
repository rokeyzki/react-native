import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }

    this.getInputValue = this.getInputValue.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome',
  }

  getInputValue() {
    // console.dir(this.refs.myInput);

    this.setState({
      inputValue: this.refs.myInput._lastNativeText
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Other')}
          title="Other Button"
        />
        <TextInput
          ref="myInput"
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <Button
          onPress={this.getInputValue}
          title="Get Input Value"
        />
        <Text>{`value: ${this.state.inputValue}`}</Text>
      </View>
    );
  }
}

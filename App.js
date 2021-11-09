import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PickImage from './screens/Camera'

export default class App extends React.Component {
  render() {
    return (
     
     <PickImage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

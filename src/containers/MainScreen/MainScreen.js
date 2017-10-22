import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class MainScreen extends Component {
  componentWillMount() {
    this.props.initApp();
  }

  render() {
    const {
      container,
    } = styles;
    const {
      appOpenedTimes,
    } = this.props;
    return (
      <View style={container}>
        <Text>Main Screen</Text>
        <Text>App has been opened {appOpenedTimes} times</Text>
      </View>
    );
  }
}

MainScreen.propTypes = {
  initApp: PropTypes.func.isRequired,
  appOpenedTimes: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default MainScreen;

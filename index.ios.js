'use strict';
import React, { Component } from 'react';
 
var ReactNative = require('react-native');
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';
var SearchPage = require('./searchPage');

class HelloWorld extends Component{
  render(){
    return <Text style={styles.text}> Hello World! </Text>;
  }
}

class propertyFinder extends Component{
  render(){
    return (
      <ReactNative.NavigatorIOS 
      style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: SearchPage,
      }} />
    )
 
  }
}

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor : 'white',
    fontSize: 30, 
    margin : 80
  },
  container: {
    flex:1
  }
});

AppRegistry.registerComponent('propertyFinder', function() { return propertyFinder});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import axios from 'axios'
import qs from 'qs'
// 引入引导页组件
import SplashScreen from 'rn-splash-screen';

export default class myApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  componentWillMount() {
    axios.get('http://127.0.0.1:3000/getChapter?chapterUrl=http://www.snwx.com/book/7/7136/24849650.html').then(res => {
      console.log(chapterUrl)
      console.log(res.data.chapter.title)
      let body = res.data.chapter.title
      this.setState = ({
        title: body
      })
    })
    console.log(this.state.body)
  }
  render() {
    return (
      <View style={styles.container.body}>
        <Text>
          {this.state.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

AppRegistry.registerComponent('myApp', () => myApp);

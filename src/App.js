/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import SplashScreen from 'rn-splash-screen';

import BookStand from './pages/BookStand';
import City from './pages/City';
import Stack from './pages/Stack';
import Category from './pages/Category';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'Stack'
    };
  }
  componentWillMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          title="书架"
          selected={this.state.selectedTab === 'BookStand'}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require('./imgs/maintab_bookstand_icon.png')} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require('./imgs/maintab_bookstand_icon_hover.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'BookStand' })}>
          <BookStand {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="排行榜"
          selected={this.state.selectedTab === 'City'}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("./imgs/maintab_city_icon.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("./imgs/maintab_city_icon_hover.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'City' })}>
          <City {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="书架"
          selected={this.state.selectedTab === 'Stack'}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require("./imgs/maintab_stack_icon.png")} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require("./imgs/maintab_stack_icon_hover.png")} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'Stack' })}>
          <Stack {...this.props}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          title="搜索"
          selected={this.state.selectedTab === 'Category'}
          titleStyle={styles.textStyle}
          renderIcon={() => <Image source={require('./imgs/maintab_category_icon.png')} style={styles.iconStyle}/>}
          renderSelectedIcon={() => <Image source={require('./imgs/maintab_category_icon_hover.png')} style={styles.iconStyle}/>}
          onPress={() => this.setState({ selectedTab: 'Category' })}>
          <Category {...this.props}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});
export default App;

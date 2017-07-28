import { Navigation } from 'react-native-navigation';
import { NativeModules } from 'react-native';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// 内置对象扩展
String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Explore',
      screen: 'app.Home', // this is a registered name for a screen
      icon: require('./img/maintab_bookstand_icon.png'),
      selectedIcon: require('./img/maintab_bookstand_icon.png'), // iOS only
      title: 'Explore',
    },
    {
      label: 'Search',
      screen: 'app.Search', // this is a registered name for a screen
      icon: require('./img/maintab_city_icon.png'),
      selectedIcon: require('./img/maintab_city_icon.png'), // iOS only
      title: 'Search',
    },
    {
      label: 'Download',
      screen: 'app.Download',
      icon: require('./img/maintab_stack_icon.png'),
      selectedIcon: require('./img/maintab_stack_icon.png'), // iOS only
      title: 'Download',
    },
    {
      label: 'More',
      screen: 'app.More',
      icon: require('./img/maintab_category_icon.png'),
      selectedIcon: require('./img/maintab_category_icon.png'), // iOS only
      title: 'More',
    },
  ],
  appStyle: {
    tabBarSelectedButtonColor: '#3399FE', // change the color of the selected tab icon and text (only selected)
    forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
  },
});

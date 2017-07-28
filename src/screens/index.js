import { Navigation } from 'react-native-navigation';
import BookShelf from './BookShelf';
import Featured from './Featured';
import Stacks from './Stacks';
import Find from './Find';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.BookShelf', () => BookShelf);
  Navigation.registerComponent('app.Featured', () => Featured);
  Navigation.registerComponent('app.Stacks', () => Stacks);
  Navigation.registerComponent('app.Find', () => Find);
}

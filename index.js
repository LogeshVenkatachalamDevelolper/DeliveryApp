/**
 * @format
 */
globalThis.APP_START_TIME = Date.now();
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

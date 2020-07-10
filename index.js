/**
 * @format
 */
console.disableYellowBox = true

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => require('./src/routes').default);

/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const RenderText = Text.render;

Text.render = function render(props) {
  props = {...props, style: [{fontFamily: 'Varela-Regular'}, props.style]};
  return RenderText.apply(this, [props]);
};

AppRegistry.registerComponent(appName, () => App);

import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import tab1 from './tab1';
import tab2 from './tab2';
import tab3 from './tab3';

export function registerScreens() {
  Navigation.registerComponent('example.tab1', () => tab1);
  Navigation.registerComponent('example.tab2', () => tab2);
  Navigation.registerComponent('example.tab3', () => tab3);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}

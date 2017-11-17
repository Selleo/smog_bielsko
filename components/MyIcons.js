/**
 * MyIcons icon set component.
 * Usage: <MyIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  "rain": 58945,
  "wind": 58947,
  "thermometer": 59376,
  "pressure": 59681
};

const iconSet = createIconSet(glyphMap, 'smog-icons', 'smog-icons.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

import { Dimensions } from 'react-native';

import StyleSheet from 'react-native-extensible-stylesheet'
const window = Dimensions.get('window');

export default StyleSheet.create({
  $colorWhite: 'white',
  $headerHeight: 180,
  container: {
    height: '$headerHeight',
    position: 'relative',
    width: undefined,
  },
  title: {
    backgroundColor: 'transparent',
    color: '$colorWhite',
    fontSize: 30,
    marginLeft: 30,
    marginTop: 90,
    position: 'relative',
    zIndex: 1,
  },
  description: {
    backgroundColor: 'transparent',
    color: '$colorWhite',
    marginLeft: 30,
    paddingTop: 5,
    position: 'relative',
    zIndex: 1,
  },
  bgr: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
    flexDirection: 'column',
    height: '$headerHeight',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    top: 0,
    width: undefined,
  },
  bgr2: {
    height: '$headerHeight',
    resizeMode: 'stretch',
    ...StyleSheet.absoluteFillObject,
    top: -10,
  },
  withShadow: {
    backgroundColor: 'white',
    borderRadius: 3,
    alignItems: 'stretch',
  },
  withShadow2: {
    backgroundColor: 'white',
    borderRadius: 3,
  },

  elevatedView: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 0,
  },
  alignCenter: {
    alignItems: 'center'
  },
  circleContainer: {
    alignItems: 'center',
    borderRadius: 30,
    height: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 15,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});

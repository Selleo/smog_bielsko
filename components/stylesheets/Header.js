import StyleSheet from 'react-native-extensible-stylesheet'

export default StyleSheet.create({
  $colorWhite: 'white',
  $headerHeight: 120,
  container: {
    height: '$headerHeight',
    position: 'relative',
    width: undefined,
  },
  title: {
    backgroundColor: 'transparent',
    color: '$colorWhite',
    fontSize: 22,
    marginLeft: 30,
    marginTop: 30,
    position: 'relative',
    zIndex: 1,
  },
  description: {
    backgroundColor: 'transparent',
    color: '$colorWhite',
    marginLeft: 30,
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
    top: -20,
  }
});

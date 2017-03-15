import StyleSheet from 'react-native-extensible-stylesheet'

export default StyleSheet.create({
  container: {
    width: undefined,
    height: 120,
    position: 'relative',
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    marginTop: 30,
    zIndex: 1,
    position: 'relative'
  },
  description: {
    color: 'white',
    backgroundColor: 'transparent',
    zIndex: 1,
    position: 'relative'
  },
  bgr: {
    backgroundColor: 'transparent',
    width: undefined,
    height: 120,
    borderWidth: 0,
    padding: 0,
    margin: 0,
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bgr2: {
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject
  }
});

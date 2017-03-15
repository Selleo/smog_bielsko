import StyleSheet from 'react-native-extensible-stylesheet'

export default StyleSheet.create({
  container: {
    height: 120,
    position: 'relative',
    width: undefined,
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 22,
    marginLeft: 30,
    marginTop: 30,
    position: 'relative',
    zIndex: 1,
  },
  description: {
    backgroundColor: 'transparent',
    color: 'white',
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
    height: 120,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    top: 0,
    width: undefined,
  },
  bgr2: {
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    ...StyleSheet.absoluteFillObject
  }
});

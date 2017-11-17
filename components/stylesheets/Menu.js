import StyleSheet from 'react-native-extensible-stylesheet'

export default StyleSheet.create({
  button: {
    height: 32,
    padding: 10,
    position: 'absolute',
    top: 20,
  },
  caption: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  menu: {
    backgroundColor: 'gray',
    flex: 1,
    height: window.height,
    padding: 20,
    width: window.width,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    borderRadius: 24,
    flex: 1,
    height: 48,
    width: 48,
  },
  name: {
    left: 70,
    position: 'absolute',
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
})

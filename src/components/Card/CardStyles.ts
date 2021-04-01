import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.19,
    marginBottom: 10,
    marginTop: 10,
  },
});

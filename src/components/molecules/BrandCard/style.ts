import { StyleSheet, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e2e6f0',
    flex: 1,
    borderRadius: 15,
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export { styles };
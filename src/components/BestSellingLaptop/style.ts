import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    marginTop: 10,
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#edf0f5',
    height: 250,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  showAll: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderBottomColor: '#0068c5'
  },
  titleAccessories: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
});
export { styles };

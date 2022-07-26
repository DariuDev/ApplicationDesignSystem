import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginHorizontal: 5,
    flex: 1,
    height: 250,
    width: 150,
    backgroundColor:'#fff',
    borderColor: '#edf0f5',
    borderLeftWidth: 1,
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

import {StyleSheet} from 'react-native';
import theme from '../../../constants';

export const styles = StyleSheet.create({
  background: {
    height: 380,
  },
  list: {
    top: 10,
  },
  card: {
    marginTop: 10,
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 15,
    height: 250,
    width: 150,
    backgroundColor: theme.COLORS.WHITE,
  },
  showAll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  deliveryTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});

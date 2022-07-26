import {StyleSheet} from 'react-native';
import theme from '../../../constants';

export default StyleSheet.create({
  mainView: {
    alignItems: 'center',
  },
  option: {
    fontSize: 20,
    color: theme.COLORS.WHITE,
    textAlign: 'center',
  },
  smallUnselected: {
    backgroundColor: theme.COLORS.RED.DARK,
    margin: 5,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediumUnselected: {
    backgroundColor: theme.COLORS.RED.DARK,
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigUnselected: {
    backgroundColor: theme.COLORS.RED.DARK,
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallSelected: {
    backgroundColor: theme.COLORS.BLUE.DARK,
    margin: 6,
    borderRadius: 30 / 2,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediumSelected: {
    backgroundColor: theme.COLORS.BLUE.DARK,
    margin: 6,
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigSelected: {
    backgroundColor: theme.COLORS.BLUE.DARK,
    margin: 6,
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

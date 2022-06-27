import {  StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    // ...
    badgeCard: {
        position: 'absolute',
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            android: {
                elevation: 5,
            },
            ios: {
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowRadius: 3,
            },
        }),
    },

  });
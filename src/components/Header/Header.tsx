import React from 'react';
import { Appbar } from 'react-native-paper';
import Search from '../Search';

const Header = () => {
    return (
        <Appbar.Header style={{width: '100%', backgroundColor: '#061d72'}}>
            <Appbar.Content title={<Search />}/>
        </Appbar.Header>
    )
}
export default Header;
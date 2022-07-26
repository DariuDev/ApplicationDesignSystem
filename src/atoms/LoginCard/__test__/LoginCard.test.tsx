import React from 'react';
import {render} from '@testing-library/react-native';
import LoginCard from '../LoginCard';

describe('molecules => LoginCard', () => {
    it('test Login card', () => {
        const screen = render(<LoginCard height={300} />)
        expect(screen.getByTestId('loginCard-id')).toHaveStyle({height: 300});
    })
})
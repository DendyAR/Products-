import { render, screen } from '@testing-library/react';
import { Login }from '../pages/public';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../Redux/store'
const {store} = configureStore()

test('form login username and password must be required', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Login/>
            </BrowserRouter>
        </Provider>
    )
    expect(screen.getByTestId('inputEmail')).toHaveAttribute('type', 'email')
});

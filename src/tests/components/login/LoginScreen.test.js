import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    );


    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe realizar el dispatch y la navegacion', () => {

        const handleClick = wrapper.find('button').prop('onClick');

        act(() => {
            handleClick();
        })

        expect(contextValue.dispatch).toHaveBeenCalled();
    });


});

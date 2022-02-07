import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />.', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('LoginScreen').exists()).toBe(true);
        expect(wrapper.find('h1').text()).toBe('Login');
    });

    test('Debe mostrar el componente marvel si esta autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Pepito'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper.find('MarvelScreen').exists() ).toBe(true);
    });


});

import { mount, shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { PrivateRoutes } from '../../routers/PrivateRoutes';

describe('Pruebas en <PrivateRoutes />', () => {

    Storage.prototype.setItem = jest.fn();
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Debe mostrar el componente si esta autenticado y guardar en localStorage', () => {

        const TestComponent = () => (
            <AuthContext.Provider value={{ user: { name: 'Kames' } }}>
                <PrivateRoutes isAuthenticated={true} />
            </AuthContext.Provider>
        )

        const wrapper = mount(
            <MemoryRouter>
                <TestComponent />
            </MemoryRouter>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });


    test('Debe mostrar el componente si esta autenticado y guardar en localStorage', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoutes isAuthenticated={false} />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('h1').text() ).toBe('Login');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });
});

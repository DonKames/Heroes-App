import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'trixie',
            logged: true
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    test('Debe mostrarse correctamente', () => {
        expect( wrapper.find('span').text() ).toBe( contextValue.user.name )
        expect( wrapper ).toMatchSnapshot();
    });

});

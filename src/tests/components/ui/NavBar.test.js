import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';

describe('Pruebas en <NavBar />', () => {

  const navigateMock = jest.fn();

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
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  )


  test('Debe mostrarse correctamente.', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text()).toBe(contextValue.user.name);
  });

  
  test('Debe llamar el logout y el user history', () => {

    act(() => {
      wrapper.find('button').prop('onClick')();
    });
    
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });


  });
});

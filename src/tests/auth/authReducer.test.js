import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer.', () => {

  const initialState = {
    logged: false
  }

  const loggedState = {
    name: 'KaMEs'
  }

  test('Debe retornar el estado por defecto.', () => {

    const resp = authReducer(initialState, {});

    expect(resp).toEqual(initialState);
    
  });


  test('Debe autenticar y colocar el name del usuario.', () => {

    const resp = authReducer(initialState, {
      type: types.login,
      payload: loggedState
    })

    expect(resp).toEqual({
      name: 'KaMEs',
      logged: true
    });
  });


  test('Debe borrar el name del usuario y logged en false', () => {
    const resp = authReducer(loggedState, {
      type: types.logout
    })

    expect( resp ).toEqual( initialState )
  });
});
